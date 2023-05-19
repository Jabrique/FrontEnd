import {html} from 'lit'
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class CardList extends LitWithoutShadowDom{
    constructor(){
        super()
        this.cardArray = []
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchBooksData();
    }

    async fetchBooksData(){
        const fetchBooks = await fetch('/data/DATA.json')
        const responseBooks = await fetchBooks.json()
        this.cardArray = responseBooks.listStory
        this.requestUpdate()
    }
    render(){
        return html`
        <div class="row mb-5 g-3 justify-content-center">
        ${this.cardArray.map((item) => {
            return html`<card-book class="col-12 col-sm-6 col-lg-4 justify-content-center d-flex mb-5" source="${item.photoUrl}" title="${item.name}" cardContent="${item.description}" dataId = "${item.id}"  buttonContent="view"></card-book>`})}
        </div>
        `
    }
}

customElements.define('card-list', CardList)