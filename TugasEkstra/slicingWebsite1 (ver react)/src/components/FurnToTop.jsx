import React from "react";

class FurnToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.windowScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  }

  windowScrollHandler = () => {
    if (window.scrollY > 100) {
      this.setState({ isDisplayed: true });
    } else {
      this.setState({ isDisplayed: false });
    }
  };

  toTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div>
        {this.state.isDisplayed && (
          <button className="furn-to-top" onClick={this.toTopHandler}>
            <div className="furn-to-top__image"></div>
          </button>
        )}
      </div>
    );
  }
}

export default FurnToTop;
