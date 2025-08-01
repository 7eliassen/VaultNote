function Editor() {
    return (
            <div className="sidebar">
                <div className="sidebar_header">
                    <img className="vaultnote_icon" src="/lock.svg" alt="VaultNote Icon" />
                    <h2>VaultNote</h2>
                    <button className="new_note">
                        <svg className="add_note_icon" viewBox="0 0 24 24">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </button>
                </div>
            </div>
    )
}

export default Editor