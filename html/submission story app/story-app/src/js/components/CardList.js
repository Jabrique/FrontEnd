import {html} from 'lit'
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class CardList extends LitWithoutShadowDom{
    static properties={
        cardArray:{type:Array, reflect: true}
    }
    render(){
        return html`
        <div class="row mb-5 g-3 justify-content-center">
        ${this.cardArray.map((item) => {
            return html`<card source="${item.photoUrl}" title="${item.name}" cardContent="${item.description}" buttonContent="view"></card>`})}
        </div>
        `
    }
}

customElements.define('card-list', CardList)