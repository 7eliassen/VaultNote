import { useEffect, useRef } from "react"

function EditorHeader({ activeNote: Note, handleUpdateTitle, handlePutNote, setShowSidebar}) {
    
    const noteId = useRef(null)
    const isInit = useRef(false)

    const handleTextChange = (e) => {
        handleUpdateTitle(e.target.value)
    }

    /*This is a litle stupid cause editor.jsx has simmilar code but it works*/

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
            <button className="show-sidebar-button"onClick={setShowSidebar}> 
                <svg className="show-sidebar-svg" viewBox="0 0 24 24">
                <path d="M20 4H4A2 2 0 0 0 2 6V18a2 2 0 0 0 2 2H20a2 2 0 0 0 2-2V6A2 2 0 0 0 20 4ZM4 6H7V18H4ZM20 18H9V6H20Z"></path>
                </svg>
            </button>
            <textarea wrap="off"
                value={Note ? Note.title : ""}
                onChange={handleTextChange}
                placeholder="Set note title..."
            ></textarea>
        </div>
    )
}

export default EditorHeader
