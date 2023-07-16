import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./noteHeader";
import NoteBody from "./noteBody";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData(),
            searchKeyword: ''
        }

        this.onAddNote = this.onAddNote.bind(this)
        this.onArchive = this.onArchive.bind(this)
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    onSearch(keyword){
        this.setState({searchKeyword: keyword})
    }

    onDeleteNoteHandler(id){
        const notes = this.state.notes.filter((note)=> note.id!==id)
        this.setState({notes})
    }

    onArchive(id){
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
              if (note.id === id) {
                return {
                  ...note,
                  archived: !note.archived
                };
              }
              return note;
            });
        
            return {
              notes: updatedNotes
            };
        });
    }

    onAddNote({title, body}){
        this.setState((prevState)=>({
            notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title: title,
                    body: body,
                    createdAt: new Date().toISOString(),
                    archived: false
                }
            ]
        }))
    }

    render(){
        const filteredNotes = this.state.searchKeyword? this.state.notes.filter((note)=>note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())) : this.state.notes

        return (
            <div>
                <NoteHeader onSearch={this.onSearch}/>
                <NoteBody notes={filteredNotes.filter((note)=>note.archived===false)} archivedNotes={filteredNotes.filter((note)=>note.archived===true)} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchive} onAddNote={this.onAddNote}/> 
            </div>
        )
    }
}

export default NotesApp