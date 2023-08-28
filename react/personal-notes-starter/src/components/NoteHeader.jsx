import React from "react"
import NoteSearch from "./NoteSearch"

function NoteHeader({onSearch}){
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch onSearch={onSearch}></NoteSearch>
        </div>
    )
}

export default NoteHeader