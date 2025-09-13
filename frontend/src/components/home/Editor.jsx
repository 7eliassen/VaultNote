import {useState, useEffect, useRef} from "react"

function Editor({ Note, handleUpdateNote, handlePutNote}) {

    const [text, setText] = useState(Note ? Note.content : null)
    const isInit = useRef(false)
    const noteId = useRef(null)
    const handleTextChange = (e) => {
        handleUpdateNote(e.target.value)
    }


    useEffect(() => {
        if (!Note) return;

        if (Note.id !== noteId.current) {
            /*If we initialize new note we don't need save it*/
            isInit.current = true;    
            setText(Note.content);  
            noteId.current = Note.id;
        } else {
            setText(Note.content);  
        }
    }, [Note]);



    useEffect (() => {
        if (isInit.current || Note == null) {
            isInit.current = false
            return
        }
        if (Note?.timeout) {clearTimeout(Note.timeout)}
        
        Note.timeout = setTimeout(() => {handlePutNote(Note)}, 2000)
    }, [text])


    return (
        <div className="editor" style={{ display: Note? "" : "none" }}>
                <textarea 
                className="editor-text" 
                onChange={handleTextChange} 
                value={Note ? Note.content : ""}
                placeholder="Write here...">
                </textarea>
        </div>
    );
}

export default Editor