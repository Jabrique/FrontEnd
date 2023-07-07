import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import {msg, updateWhenLocaleChanges} from '@lit/localize'

class SearchBar extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
  };

  constructor(){
    super()
    updateWhenLocaleChanges(this)
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

        const spinner = document.querySelector('.spinner-wrapper')
        spinner.style.display = 'flex'
        setTimeout(()=>{
          spinner.style.display = 'none'
        }, 500)

        document.querySelector('card-list').setAttribute('cardArray', JSON.stringify(filteredBooks))
      })
  }

  render() {
    return html`
      <form class="d-flex me-lg-5" id="searchForm" role="search">
        <input class="form-control me-2" id="searchInput" type="search" placeholder="${msg("Search ")}" aria-label="Search" />
        <button class="btn btn-outline-success" id="searchButton" type="submit">${this.content}</button>
      </form>
    `;
  }
}

customElements.define("search-bar", SearchBar);