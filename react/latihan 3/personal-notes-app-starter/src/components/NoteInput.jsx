import React from "react";

function NoteInput({keyword, keywordChangeHandler}){
    return (
        <div className="search-bar">
            <input 
            type="text"
            value={keyword}
            placeholder="Cari berdasarkan judul ..."
            onChange={(event) => keywordChangeHandler(event.target.value)} />
        </div>
    )
}

export default NoteInput