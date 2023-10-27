import React from "react";
import {useParams} from 'react-router-dom'
import { getNote } from "../utils/local-data";
import DetailNote from "../components/DetailNote";

function DetailPageWrapper() {
    const {id} = useParams()

    return (
        <DetailPage id={id}/>
    )
}

class DetailPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            note: getNote(props.id)
        }
    }

    render(){
        return (
            <section>
                <DetailNote {...this.state.note}></DetailNote>
            </section>
        )
    }
}

export default DetailPageWrapper