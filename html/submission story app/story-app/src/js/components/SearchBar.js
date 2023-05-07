import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class SearchBar extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailability();
  }

  _checkAvailability() {
    if (!this.hasAttribute("content")) {
      throw new Error(`Attribute "content" harus diterapkan pada ${this.localName}`);
    }
  }

  render() {
    return html`
      <form class="d-flex me-lg-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">${this.content}</button>
      </form>
    `;
  }
}

customElements.define("search-bar", SearchBar);
