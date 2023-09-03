import React, { Component } from "react";
import FurnNavLinks from "./FurnNavLinks";

class FurnNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLinksVisible: false,
    };
  }

  handleMenuContentClick = () => {
    this.setState((prevState) => ({
      isLinksVisible: !prevState.isLinksVisible,
    }));
  };

  render() {
    const linksClass = this.state.isLinksVisible ? "nav-list nav-list--show" : "nav-list";

    return (
      <nav>
        <div className="nav__menuButton">
          <div className="nav__menuContent" onClick={this.handleMenuContentClick}>
            <p>MENU</p>
            <div className="nav__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <FurnNavLinks className={linksClass}></FurnNavLinks>
      </nav>
    );
  }
}

export default FurnNav;
