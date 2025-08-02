import { useState, useEffect} from "react"
import Sidebar from "../components/home/Sidebar.jsx"
import MainWindow from "../components/home/MainWindow.jsx"

function Home() {
    const [activeNote, setActiveNote] = useState(-1)
    const [notes, setNotes] = useState([])

    const handleValueChange = (index) => {
        setActiveNote(index)
    }

    const handleNewNote = (index) => {
        setNotes([...notes, {id: index, title: "New Note", content: "testtest"}])
    } 

    function handleDeleteNote(i) {
        setNotes(notes.filter((_, index) => index !== i))
    }

    return (
        <div className="home_container">
             <Sidebar 
             activeNote={activeNote} 
             activeNoteChange={handleValueChange} 
             notes={notes}
             handleNewNote={handleNewNote}
             handleDeleteNote={handleDeleteNote}
             />

            <MainWindow activeNote={activeNote === -1 ? null : notes[activeNote]} />  
        </div>
    )
}

export default Home
