from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select, SQLModel, Field
from app.auth import get_current_active_user
from app.database import get_session
from typing import List, Optional
from app.models.note import NoteBase, NoteCreate, NoteRead, NoteUpdate
from app.schemas.note import NoteDB
from app.schemas.user import User as UserDB
import uuid
router = APIRouter(tags=["notes"])


@router.post("/notes/", response_model=NoteRead)
def create_note(note: NoteCreate, 
                current_user: UserDB = Depends(get_current_active_user), 
                session: Session = Depends(get_session)):
    note_db = NoteDB(title = note.title, content=note.content, user_id=current_user.id)
    session.add(note_db)
    session.commit()
    session.refresh(note_db)
    return note_db

@router.get("/notes/{note_id}", response_model=NoteRead)
def read_note(note_id: uuid.UUID, 
              current_user: UserDB = Depends(get_current_active_user),
              session: Session = Depends(get_session)):
    note = session.get(NoteDB, note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    if note.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return note

@router.get("/notes/", response_model=List[NoteRead])
def list_notes(current_user: UserDB = Depends(get_current_active_user),
               session: Session = Depends(get_session)):
    notes = session.exec(
        select(NoteDB).where(NoteDB.user_id == current_user.id)
    ).all()    
    return notes

@router.put("/notes/{note_id}", response_model=NoteRead)
def update_note(note_id: uuid.UUID,
                note: NoteUpdate, 
                current_user: UserDB = Depends(get_current_active_user),
                session: Session = Depends(get_session)):
    note_db = session.get(NoteDB, note_id)
    if not note_db:
        raise HTTPException(status_code=404, detail="Note not found")
    if note_db.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    #TODO: There using deprecated method. Need to replace
    note_data = note.dict(exclude_unset=True)
    for key, value in note_data.items():
        setattr(note_db, key, value)
    session.commit()
    session.refresh(note_db)
    return note_db

@router.delete("/notes/{note_id}")
def delete_note(note_id: uuid.UUID, 
                current_user: UserDB = Depends(get_current_active_user),
                session: Session = Depends(get_session)):
    note = session.get(NoteDB, note_id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    if note.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    session.delete(note)
    session.commit()
    return {"deleted": True}

