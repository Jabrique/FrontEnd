import React from "react";

class NoteSearch extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            keyword: ""
        }

        this.onInputChangeEventHandler = this.onInputChangeEventHandler.bind(this)
    }

    onInputChangeEventHandler(event){
        this.setState({keyword: event.target.value})
        this.props.onSearch(event.target.value)
    }

    render(){
        return (
            <div className="note-search">
                <input type="text" placeholder="Cari catatan ..." value={this.state.keyword} onChange={this.onInputChangeEventHandler}/>
            </div>
        )
    }
}

export default NoteSearch