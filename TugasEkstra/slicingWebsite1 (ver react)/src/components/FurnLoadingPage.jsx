import React from "react";

class FurnLoadingPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            loading: true
        }
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading: false})
        }, 2000)
    }

    render(){
        return(
            <>
            {
                this.state.loading && <div className="furn-loading">
                <div className="furn-loading__circle">
                    <div className="furn-loading__square">
                        <p><span>F</span>U</p>
                        <p><span>R</span>N</p>
                    </div>
                </div>
            </div>
            }
            </>            
        )
    }
}

export default FurnLoadingPage