function EditorHeader({ activeNote }) {
    return (
        <div className="editor-header" style={{ display: activeNote ? "" : "none" }}>
            <h2>{activeNote ? activeNote.title : ""}</h2>
        </div>
    );
}

export default EditorHeader