import { useEffect, useRef } from "react"

function EditorHeader({ activeNote: Note, handleUpdateTitle, handlePutNote}) {
    
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
            <textarea
                value={Note ? Note.title : ""}
                onChange={handleTextChange}
                placeholder="Set note title..."
            ></textarea>
        </div>
    )
}

export default EditorHeader
