import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this)
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleEventHandler(event){
        if(event.target.value.length<=50){
            this.setState({title: event.target.value})
        }
    }
    onBodyEventHandler(event){
        this.setState({body: event.target.value})
    }

    onSubmitEventHandler(event){
        event.preventDefault()
        this.props.onAddNote(this.state)
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {50-this.state.title.length}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleEventHandler}/>
                    <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput