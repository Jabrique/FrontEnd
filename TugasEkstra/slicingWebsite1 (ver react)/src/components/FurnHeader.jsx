import React from "react";
import FurnLogo from "./FurnLogo";
import FurnNav from "./FurnNav";
import FurnSearch from "./FurnSearch";

class FurnHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isSticky: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.windowScrollHandler)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.windowScrollHandler)
    }

    windowScrollHandler = () => {
        if(window.scrollY > 100){
            this.setState({isSticky: true})
        }else{
            this.setState({isSticky: false})
        }
    }

    render(){
        return (
            <header className={this.state.isSticky? "header--sticky" : ""}>
                <FurnLogo></FurnLogo>
                <FurnNav></FurnNav>
                <div className="header__account">
                    <FurnSearch></FurnSearch>
                    <p className="header__myAccount">MyAccount</p>
                    <div className="header__wishlist">
                        <p>0</p>
                    </div>
                </div>
            </header>
        )   
    }
}

export default FurnHeader