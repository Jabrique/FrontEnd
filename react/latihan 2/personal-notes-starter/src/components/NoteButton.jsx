import React from "react";

function NoteButton({id, archived, onDelete, onArchive}){
    return (
    <div className="note-item__action">
        <button className="note-item__delete-button" onClick={()=>onDelete(id)}>Delete</button>
        <button className="note-item__archive-button" onClick={()=>onArchive(id)}>{archived? "Pindahkan": "Arsip"}</button>
    </div>
    )
}

export default NoteButton