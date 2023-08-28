import React from "react";
import NoteContent from "./NoteContent";
import NoteButton from "./NoteButton";

function NoteItem({title, createdAt, body, id, archived, onDelete, onArchive}){
    return (
        <div className="note-item">
            <NoteContent
            title={title}
            createdAt={createdAt}
            body={body}
            ></NoteContent>
            <NoteButton
            id={id}
            archived={archived}
            onDelete={onDelete}
            onArchive={onArchive}
            ></NoteButton>
        </div>
    )
}

export default NoteItem