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

  firstUpdated(){
    const searchInput = document.querySelector('#searchInput')
      console.log(document.getElementById('searchForm'))
      
      document.getElementById('searchForm').addEventListener('submit', async(event)=>{
        event.preventDefault()
        const fetchBooks = await fetch('/data/DATA.json')
        const responseBooks = await fetchBooks.json()
        const userBooks = responseBooks.listStory
        const filteredBooks = userBooks.filter(item=> item.name.toUpperCase().includes(searchInput.value.toUpperCase()))
        console.log(filteredBooks)
        document.querySelector('card-list').setAttribute('cardArray', JSON.stringify(filteredBooks))
      })
  }

  render() {
    return html`
      <form class="d-flex me-lg-5" id="searchForm" role="search">
        <input class="form-control me-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" id="searchButton" type="submit">${this.content}</button>
      </form>
    `;
  }
}

customElements.define("search-bar", SearchBar);
