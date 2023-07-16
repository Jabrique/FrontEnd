import React from "react";
import NoteContent from "./NoteContent";
import NoteButton from "./NoteButton";

function NoteItem({title, createdAt, body, id, onDelete, archived, onArchive}){
    return (
        <div className="note-item">
            <NoteContent title={title} createdAt={createdAt} body={body}/>
            <NoteButton id={id} onDelete={onDelete} archived={archived} onArchive={onArchive}/>
        </div>
    )
}

export default NoteItem