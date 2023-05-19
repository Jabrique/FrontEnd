import { LitElement, html, css } from "lit";

class FooterApp extends LitElement{
    static styles=css`
    p{
        color: white;
        text-align: center;
    }
    `
    render(){
        return html`
        <p>Dibuat oleh seseorang</p>
        `
    }
}

customElements.define('footer-app', FooterApp)