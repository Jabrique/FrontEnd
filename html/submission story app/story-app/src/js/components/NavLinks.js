import { html, css } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav me-lg-6 mb-2 mb-lg-0 gap-lg-6">
        <nav-link content="Home" to="/"></nav-link>
        <nav-link content="Add Books" to="/books/add.html"></nav-link>
      </ul>
      <search-bar content="Search"></search-bar>
    `;
  }
}

customElements.define('nav-links', NavLinks)