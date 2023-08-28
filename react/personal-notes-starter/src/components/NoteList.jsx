import React from "react"
import NoteItem from "./NoteItem"

function NoteList({notes, onDelete, onArchive}){
    return (
        notes.length?
        <div className="note-list">
            {
             notes.map(note=>(
                <NoteItem 
                key={note.id} 
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
                ></NoteItem>
             ))   
            }
        </div> : <p className="note-list__empty-message">Tidak ada catatan</p>
    )
}

export default NoteList