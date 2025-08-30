<<<<<<< HEAD
import { useEffect, useRef } from "react"

function EditorHeader({ activeNote: Note, handleUpdateTitle, handlePutNote}) {
    
    const noteId = useRef(null)
    const isInit = useRef(false)

    const handleTextChange = (e) => {
        handleUpdateTitle(e.target.value)
    }

    useEffect(() => {
        if (!Note) return

        if (Note.id !== noteId.current) {
            isInit.current = true
            noteId.current = Note.id
        }
    }, [Note])

    useEffect(() => {
        if (!Note) return

        if (isInit.current) {
            isInit.current = false
            return
        }

        if (Note?.timeoutTitle) {
            clearTimeout(Note.timeoutTitle)
        }

        Note.timeoutTitle = setTimeout(() => {
            handlePutNote(Note)
        }, 2000)

    }, [Note?.title])

    return (
        <div className="editor-header" style={{ display: Note ? "" : "none" }}>
            <textarea
                value={Note ? Note.title : ""}
                onChange={handleTextChange}
                placeholder="Set note title..."
            ></textarea>
        </div>
    )
}

export default EditorHeader
=======
function EditorHeader({ activeNote }) {
    return (
        <div className="editor-header" style={{ display: activeNote ? "" : "none" }}>
            <h2>{activeNote ? activeNote.title : ""}</h2>
        </div>
    );
}

export default EditorHeader
>>>>>>> 539b9111647a15ca46548c43f25a6b4f5fcf498a
