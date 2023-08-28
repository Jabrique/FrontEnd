import React from "react"
import NoteInput from "./NoteInput"
import NoteList from "./NoteList"

function NoteBody({notes, archivedNotes, onAddNote, onDelete, onArchive}){
    return (
        <div className="note-app__body">
            <NoteInput 
            onAddNote={onAddNote}></NoteInput>
            <h2>Catatan Aktif</h2>
            <NoteList 
            notes={notes}
            onDelete={onDelete}
            onArchive={onArchive}
            ></NoteList>
            <h2>Arsip</h2>
            <NoteList
            notes={archivedNotes}
            onDelete={onDelete}
            onArchive={onArchive}
            ></NoteList>
        </div>
    )
}

export default NoteBody