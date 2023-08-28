import React from "react";

function NoteButton({id, archived, onDelete, onArchive}){
    return (
        <div className="note-item__button">
            <button 
            onClick={()=> onDelete(id)}
            className="note-item__delete-button"
            >Delete</button>
            <button 
            onClick={()=> onArchive(id)}
            className="note-item__archive-button">{archived ? "Pindahkan" : "Arsip"}</button>
        </div>
    )
}

export default NoteButton