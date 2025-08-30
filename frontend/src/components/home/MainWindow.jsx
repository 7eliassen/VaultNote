import EditorHeader from "./EditorHeader"
import Editor from "./Editor"
function MainWindow({ activeNote, handleUpdateNote, handleUpdateTitle, handlePutNote}) {
    return (
        <div className="main-window">
            <EditorHeader 
            activeNote={activeNote}
            handleUpdateTitle={handleUpdateTitle}
            handlePutNote={handlePutNote}
            />
            <Editor 
            Note={activeNote}
            handleUpdateNote={handleUpdateNote}
            handlePutNote={handlePutNote}
            />
        </div>
    )
}

export default MainWindow