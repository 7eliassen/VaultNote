import Footer from "./Footer.jsx"
import SidebarNote from "./SidebarNote.jsx"
import SearchNote from "./SearchNote.jsx"
import {useState, useRef, useEffect} from "react"
function Sidebar() {

    const [notes, setNotes] = useState([])
    const tmp = useRef(0)

    const [activeNote, setActiveNote] = useState(-1)

    function addNote() {
        {/*TODO: implement creating new note (temporary hack)*/}
        tmp.current++
        setNotes([...notes, "Note"+tmp.current])
    }
 
    function deleteNote(i) {
        {/*TODO: implement deleting note (temporary hack)*/}
        setNotes(notes.filter((note, index) => index !== i))
    }

    

    return (
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="sidebar_header_header">
                        <img className="vaultnote_icon" src="/lock.svg" alt="VaultNote Icon" />
                        <h2>VaultNote</h2>
                        <button className="new_note" onClick={addNote}>
                            <svg className="add_note_icon" viewBox="0 0 24 24">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                        </button>
                    </div>
                    <SearchNote/>
                </div>

                <div className="sidebar_container">
                    {/*TODO: display notes (add after implementing creating new note)*/}
                    {notes.map((note, index) => {
                        return (
                            <div className={index === activeNote ? "sidebar-note sidebar-note-active" : "sidebar-note"} 
                            key={index} 
                            onClick={() => setActiveNote(index)}>
                                <div>
                                    <h3>{note}</h3>
                                    <p>Content</p>
                                </div>
                                <button className="delete-note-button" onClick={() => deleteNote(index)}>Delete</button>
                            </div>
                        )
                    })}
                </div>

                <Footer/>
            </div>
    )
}

export default Sidebar