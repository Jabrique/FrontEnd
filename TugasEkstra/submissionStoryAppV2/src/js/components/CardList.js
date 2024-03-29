import {html} from 'lit'
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import {msg, updateWhenLocaleChanges} from '@lit/localize'

class CardList extends LitWithoutShadowDom{
    static properties={
        cardArray:{type:Array, reflect: true}
    }

    constructor(){
        super()
        this.cardArray = []
        updateWhenLocaleChanges(this)
    }
    render(){
        return html`
        <div class="row mb-5 g-3 justify-content-center">
        ${this.cardArray.map((item) => {
            return html`<card-book class="col-12 col-sm-6 col-lg-4 justify-content-center d-flex mb-5" source="${item.photoUrl}" title="${item.name}" cardContent="${item.description}" buttonContent=${msg("view")} dataId=${item.id}></card-book>`})}
        </div>
        `
    }
}

customElements.define('card-list', CardList)