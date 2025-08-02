function Editor({ Note }) {
    return (
        <div className="editor" style={{ display: Note? "" : "none" }}>
            {/* TODO: implement editor */}
                <textarea className="editor-text">
                    {Note ? Note.content : ""}
                </textarea>   
        </div>
    );
}

export default Editor