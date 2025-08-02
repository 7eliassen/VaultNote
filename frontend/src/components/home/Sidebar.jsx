import Footer from "./Footer.jsx"
import SidebarNote from "./SidebarNote.jsx"
import SearchNote from "./SearchNote.jsx"
import { useState, useEffect } from "react"

function Sidebar({ activeNote, activeNoteChange, notes, handleNewNote, handleDeleteNote }) {

    

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_header_header">
                    <img className="vaultnote_icon" src="/lock.svg" alt="VaultNote Icon" />
                    <h2>VaultNote</h2>
                    <button className="new_note" onClick={() => handleNewNote(notes.length)}>
                        <svg className="add_note_icon" viewBox="0 0 24 24">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </button>
                </div>
                <SearchNote />
            </div>

        <div className="sidebar_container">
            {notes.map((note, index) => (
                <div
                    key={index}
                    className={`sidebar-note ${index === activeNote ? "sidebar-note-active" : ""}`}
                    onClick={() => activeNoteChange(index)}
                >
                    <div className="sidebar-note-content">
                        <h3>{note.title}</h3>
                    </div>
                    <button
                        className="delete-note-button"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteNote(index)
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>

            <Footer />
        </div>
    )
}

export default Sidebar
