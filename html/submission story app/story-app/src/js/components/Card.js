import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class CardBook extends LitWithoutShadowDom {
  static properties = {
    source: { type: String, reflect: true },
    alt: { type: String, reflect: true },
    title: { type: String, reflect: true },
    cardContent: { type: String, reflect: true },
    buttonContent: { type: String, reflect: true },
  };

  render() {
    return html`
        <div class="card" style="width: 23rem;">
          <img src="${this.source}" class="card-img-top" alt="${this.alt}" />
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.cardContent}</p>
            <a href="#" class="btn btn-primary">${this.buttonContent}</a>
          </div>
        </div>
    `;
  }
}

customElements.define("card-book", CardBook);
