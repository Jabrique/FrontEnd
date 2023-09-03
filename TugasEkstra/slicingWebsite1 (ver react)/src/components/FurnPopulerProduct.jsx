import React, { Component } from "react";
import FurnProductList from "./FurnProductList";

class FurnPopulerProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "sofa",
    };
  }

  populerProductsHandler = (productName) => {
    this.setState({ activeItem: productName });
    this.props.fetchPopulerProducts(productName);
  };

  render() {
    return (
      <section className="furn-populer-products">
        <div className="container">
          <div className="furn-populer-products__sectionTitle">
            <h2 className="furn-populer-products__title">POPULER PRODUCTS</h2>
            <p className="furn-populer-products__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <ul className="furn-populer-products__list">
            <li className={`furn-populer-products__item ${this.state.activeItem === "sofa" ? "furn-populer-products__item--active" : ""}`}>
              <a href="#sofa" onClick={() => this.populerProductsHandler("sofa")}>
                Sofa
              </a>
            </li>
            <li className={`furn-populer-products__item ${this.state.activeItem === "table" ? "furn-populer-products__item--active" : ""}`}>
              <a href="#table" onClick={() => this.populerProductsHandler("table")}>
                Table
              </a>
            </li>
            <li className={`furn-populer-products__item ${this.state.activeItem === "chair" ? "furn-populer-products__item--active" : ""}`}>
              <a href="#chair" onClick={() => this.populerProductsHandler("chair")}>
                Chair
              </a>
            </li>
            <li className={`furn-populer-products__item ${this.state.activeItem === "bed" ? "furn-populer-products__item--active" : ""}`}>
              <a href="#bed" onClick={() => this.populerProductsHandler("bed")}>
                Bed
              </a>
            </li>
            <li className={`furn-populer-products__item ${this.state.activeItem === "lightning" ? "furn-populer-products__item--active" : ""}`}>
              <a href="#lightning" onClick={() => this.populerProductsHandler("lightning")}>
                Lightning
              </a>
            </li>
            <li className={`furn-populer-products__item ${this.state.activeItem === "decore" ? "furn-populer-products__item--active" : ""}`}>
              <a href="#decore" onClick={() => this.populerProductsHandler("decore")}>
                Decore
              </a>
            </li>
          </ul>
          <FurnProductList products={this.props.populerProducts}></FurnProductList>
        </div>
      </section>
    );
  }
}

export default FurnPopulerProduct;
