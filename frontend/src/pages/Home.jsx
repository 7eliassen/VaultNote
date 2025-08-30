import { useState, useEffect } from "react"
import Sidebar from "../components/home/Sidebar.jsx"
import MainWindow from "../components/home/MainWindow.jsx"
import axios from "axios"
import userContext from "../context/userContext.jsx"
import { useNavigate } from "react-router-dom";

function Home() {
    const [activeNote, setActiveNote] = useState(-1)
    const [notes, setNotes] = useState([])
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [username, changeUsername] = useState("");

    const API_URL = "http://localhost:8000"
    
    useEffect(() => {
        axios.get(`${API_URL}/users/me/`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })  
        .then((response) => {
            console.log(response.data);
            changeUsername(response.data.username);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [])

    useEffect(() => {
        updateNotes()
    }, [])

    async function updateNotes() {
        try {
            const response = await axios.get(`${API_URL}/notes/`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            let responseData = response.data
            responseData.forEach(note => {
                note.isChanged = false
            });
            console.log(responseData);
            setNotes(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function getNote(noteId) {
        try {
            const response = await axios.get(`${API_URL}/notes/${noteId}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            let responseData = response.data
            responseData.forEach(note => {
                note.isChanged = false
            });
            console.log(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function putNote(Note) {
        try {
            const response = await axios.put(`${API_URL}/notes/${Note.id}`, {
                title: Note.title,
                content: Note.content
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            })

            console.log("addNote response:", response.data);
            setNotes(prevNotes =>
                prevNotes.map(note => note.id === Note.id ? { ...note, isChanged: false } : note)
            )
        } catch (error) {
            console.error("addNote error:", error);
        }
    }

    async function addNote(Note) {
        try {
            const response = await axios.post(`${API_URL}/notes/`, {
                title: Note.title,
                content: Note.content
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            });

            console.log("addNote response:", response.data);
            return response.data.id
        } catch (error) {
            console.error("addNote error:", error);
        }
    }

    const handleValueChange = (index = notes.length) => {
        setActiveNote(index)
    }

    async function handleNewNote(index = notes.length) {
        let newNote = {id: index, title: "New Note", content: "testtest"}
        const newNoteId = await addNote(newNote)
        newNote.id = newNoteId
        setNotes(prevNotes => [...notes, newNote])
    } 

    async function deleteNote(i) {
        try {
            const response = await axios.delete(`${API_URL}/notes/${i}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            });

            console.log("addDelete response:", response.data);
        } catch (error) {
            console.error("addDelete error:", error);
        }
    }

    async function handleDeleteNote(i) {
        try {
            deleteNote(i);
            setNotes(prevNotes => prevNotes.filter(note => note.id !== i))
            setActiveNote(-1)
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    }

    const handleUpdateNote = (newContent, index = activeNote) => {
        setNotes(notes.map((note, i) => {
            if (i === index) {
                return { ...note, content: newContent, isChanged: true }
            }
            return note
        }))
    }

    const handleUpdateTitle = (NewTitle, index = activeNote) => {
        setNotes(notes.map((note, i) => {
            if (i === index) {
                return { ...note, title: NewTitle, isChanged: true }
            }
            return note
        }))
    }
    
    return (
        <div className="home_container">
            <userContext.Provider value={username}>
                <Sidebar 
                    activeNote={activeNote} 
                    activeNoteChange={handleValueChange} 
                    notes={notes}
                    handleNewNote={handleNewNote}
                    handleDeleteNote={handleDeleteNote}
                />
            </userContext.Provider>

            <MainWindow 
                activeNote={activeNote === -1 ? null : notes[activeNote]}
                handleUpdateNote={handleUpdateNote}
                handleUpdateTitle={handleUpdateTitle}
                handlePutNote={putNote}
            />  
        </div>
    )
}

export default Home
