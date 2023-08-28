import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils";

class NoteApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getInitialData(), 
            searchKeyword: ''
        }
    }

    onSearch = (keyword) => {
        this.setState({searchKeyword: keyword})
    }

    onAddNote = ({title, body}) => {
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

    onArchive = (id) => {
        this.setState((prevState)=>({
            notes: prevState.notes.map(note =>{
                if(note.id === id){
                    note.archived = !note.archived;
                }
                return note
            })
        }))
    }

    onDelete = (id) => {
        this.setState((prevState)=>({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    render(){
        const filteredNotes = this.state.searchKeyword ? this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())) : this.state.notes
        return (
            <div>
                <NoteHeader
                onSearch={this.onSearch}></NoteHeader>
                <NoteBody 
                notes={filteredNotes.filter(note => note.archived === false)} 
                archivedNotes={filteredNotes.filter(note => note.archived===true)}
                onAddNote={this.onAddNote}
                onArchive={this.onArchive}
                onDelete={this.onDelete}></NoteBody>
            </div>
        )
    }
}

export default NoteApp