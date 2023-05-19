import { LitElement, html, css } from "lit";
import {msg, updateWhenLocaleChanges} from '@lit/localize'

class FooterApp extends LitElement{
    static styles=css`
    p{
        color: white;
        text-align: center;
    }
    `

    constructor(){
        super()
        updateWhenLocaleChanges()
    }
    render(){
        return html`
        <p>${msg(`Dibuat oleh seseorang`)}</p>
        `
    }
}

customElements.define('footer-app', FooterApp)