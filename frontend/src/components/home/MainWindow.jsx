import EditorHeader from "./EditorHeader"
import Editor from "./Editor"
function MainWindow({ activeNote, handleUpdateNote, handleUpdateTitle, handlePutNote, setShowSidebar, isSidebarShowed}) {
    return (
        <div className={`main-window ${isSidebarShowed ? "hidden-main-win" : ""}`}>
            <EditorHeader 
            activeNote={activeNote}
            handleUpdateTitle={handleUpdateTitle}
            handlePutNote={handlePutNote}
            setShowSidebar={setShowSidebar}
            />
            <Editor 
            Note={activeNote}
            handleUpdateNote={handleUpdateNote}
            handlePutNote={handlePutNote}
            />

            <style jsx>{`
                @media (max-width: 600px) {
                    .editor {
                        display: block;
                        width: 100%;
                        background-color:black;
                }
                .hidden-main-win {
                    display: none;
                }
                }
            `}</style>
        </div>
    )
}

export default MainWindow