import React from "react";
import { getActiveNotes } from "../utils/local-data";
import {useSearchParams} from 'react-router-dom'
import NoteInput from "../components/NoteInput";
import NotesList from "../components/NotesList";

function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams()

    const keyword = searchParams.get('keyword')

    const changeSearchParams = (keyword) => {
        setSearchParams({keyword})
    } 

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            keyword: props.defaultKeyword || '',
            notes: getActiveNotes()
        }
    }

    onKeywordChangeHandler = (keyword) => {
        this.setState({keyword: keyword})

        this.props.keywordChange(keyword)
    }

    render(){
        const filteredNotes = this.state.notes.filter((note) => {
          return note.title.toLowerCase().includes(this.state.keyword.toLowerCase())  
        })
        return (
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <NoteInput keyword={this.state.keyword} keywordChangeHandler={this.onKeywordChangeHandler}></NoteInput>    
                <NotesList notes={filteredNotes}></NotesList>
            </section>
        )
    }
}

export default HomePageWrapper