import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: ''
        }
    }

    onTitleInputEventHandler = (event) =>{
        if(event.target.value.length <= 50){
            this.setState({title: event.target.value})
        }
    }

    onBodyInputEventHandler = (event) => {
        this.setState({body: event.target.value})
    }

    onSubmitEventHandler = (event) =>{
        event.preventDefault()
        this.props.onAddNote(this.state)
    }

    render(){
        return (
            <div className="note-input">
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {50-this.state.title.length}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                <input 
                type="text"
                placeholder="Ini adalah judul ..." 
                value={this.state.title}
                onChange={this.onTitleInputEventHandler}/>
                <textarea 
                placeholder="Tuliskan catatanmu di sini ..."
                className="note-input__body"
                value={this.state.body}
                onChange={this.onBodyInputEventHandler}
                ></textarea>
                <button 
                type="submit"
                className="note-input__button">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput