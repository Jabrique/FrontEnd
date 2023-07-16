import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({notes, archivedNotes, onDelete, onArchive, onAddNote}){
    return (
        <div className="note-app__body">
           <NoteInput onAddNote={onAddNote} />
           <h2>Catatan Aktif</h2>
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
           <h2>Arsip</h2>
            <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NoteBody