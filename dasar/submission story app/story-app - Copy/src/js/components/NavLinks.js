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
    <div class="d-flex flex-column flex-lg-row">
    <search-bar class="test order-1 order-lg-0" content=${msg("Search")}></search-bar>
      <ul class="navbar-nav me-lg-6 mb-2 mb-lg-0 gap-lg-6">
        <nav-link content=${msg("Home")} to="/"></nav-link>
        <nav-link content=${msg("Add Books")} to="/books/add.html"></nav-link>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link content=${msg("login")} to="/auth/login.html" id="loginMenu"></nav-link>
      </ul>
    </div>
    `;
  }
}

customElements.define('nav-links', NavLinks)