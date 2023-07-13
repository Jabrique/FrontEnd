import React from 'react'

class ContactInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            tag: ''
        }

        this.onInputChangeEventHandler = this.onInputChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onInputChangeEventHandler(event, field){
        this.setState({[field]: event.target.value})
    }

    onSubmitEventHandler(event){
        event.preventDefault()
        console.log(this.props)
        this.props.addContact(this.state)
    }
    
    render(){
        return (
            <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
                <input type='text' placeholder='Nama' value={this.state.name} onChange={(event)=> {this.onInputChangeEventHandler(event, 'name')}} />
                <input type='text' placeholder='Tag' value={this.state.tag} onChange={(event)=>{this.onInputChangeEventHandler(event, 'tag')}} />
                <button type='submit'>Tambah</button>
            </form>
        )
    }
}

export default ContactInput