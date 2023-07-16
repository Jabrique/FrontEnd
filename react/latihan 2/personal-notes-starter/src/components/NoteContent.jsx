import React from "react";

function NoteContent({title, createdAt, body }){
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{new Date(createdAt).toLocaleDateString('id-ID', options)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteContent