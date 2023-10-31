class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get searchElement(){
    return this.shadowRoot.querySelector('search-bar')
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
        :host{
            display: flex;
            align-items: center;
            position: relative;
        }
        h1{
            color: black;
            
        }
        search-bar{
            position: absolute;
            left: 50%;
            transform: translateX(-50%)
        }
        @media screen and (max-width: 768px){
          h1{
            font-size: 24px;
          }
          search-bar{
            width: 40%;
            position: absolute;
            transform: translateX(0)
          }
        }
    </style>
    <h1>MoviesApp</h1>
    <search-bar></search-bar>
    `;
  }
}

customElements.define('app-bar', AppBar);
