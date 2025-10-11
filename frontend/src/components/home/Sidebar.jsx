import Footer from "./Footer.jsx"
import { useState, useEffect } from "react"
import UploadIcon from "./UploadIcon.jsx"
function Sidebar({ activeNote, activeNoteChange, notes, handleNewNote, handleDeleteNote, isSidebarShowed}) {

    const [search, setSearch] = useState("")

    const createNewNote = () => {
        handleNewNote()
        activeNoteChange()
    }

    return (
        <div className="sidebar" style={{ display: isSidebarShowed? "" : "none" }}>
            <div className="sidebar_header">
                <div className="sidebar_header_header">
                    <img className="vaultnote_icon" src="/lock.svg" alt="VaultNote Icon" />
                    <h2>VaultNote</h2>
                    <button className="new_note" onClick={createNewNote}>
                        <svg className="add_note_icon" viewBox="0 0 24 24">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </button>
                </div>

                <input className="search_note" type="text" placeholder="Search Note" onChange={(e) => {
                    setSearch(e.target.value)
                }}/>

            </div>

        <div className="sidebar_container">
            {notes
            .filter(note => note.title.includes(search)) //for search note
            .map((note, index) => (
                <div
                    key={index}
                    className={`sidebar-note ${index === activeNote ? "sidebar-note-active" : ""}`}
                    onClick={() => activeNoteChange(index)}
                >
                    <div className={note.isChanged ? "sidebar-note-content is-changed" : "sidebar-note-content"}>
                        <h3>{note.title ? note.title : "..."}</h3>
                        {note.isChanged ? 
                                <UploadIcon />
                            : <p>saved</p> }
                    </div>
                    <button
                        className="delete-note-button"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteNote(note.id)
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
            
        </div>

        <Footer />
    </div>
    )
}

export default Sidebar
