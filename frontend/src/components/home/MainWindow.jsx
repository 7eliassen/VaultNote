import EditorHeader from "./EditorHeader"
import Editor from "./Editor"
function MainWindow({ activeNote }) {
    return (
        <div className="main-window">
            <EditorHeader activeNote={activeNote}/>
            <Editor Note={activeNote}/>
        </div>
    )
}

export default MainWindow