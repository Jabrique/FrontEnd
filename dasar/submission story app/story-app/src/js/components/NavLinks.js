import { html, css } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import {msg, updateWhenLocaleChanges} from '@lit/localize'

class NavLinks extends LitWithoutShadowDom {
  constructor(){
    super()
    updateWhenLocaleChanges(this)
  }
  render() {
    return html`
      <ul class="navbar-nav me-lg-6 mb-2 mb-lg-0 gap-lg-6">
        <nav-link content=${msg("Home")} to="/"></nav-link>
        <nav-link content=${msg("Add Books")} to="/books/add.html"></nav-link>
      </ul>
      <search-bar content=${msg("Search")}></search-bar>
    `;
  }
}

customElements.define('nav-links', NavLinks)