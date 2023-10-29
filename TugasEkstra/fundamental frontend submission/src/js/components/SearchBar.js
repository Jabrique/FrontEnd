class Searchbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDom.querySelector('.header__input').value;
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
        :host{
            width: 30%;
            position: relative;
        }
        .header__input{
            background-color: transparent;
            border-radius: 40px;
            border: 0;
            box-shadow: 1px 1px 5px rgba(0,0,0,.3);
            padding: 12px;
            width: 100%;
        }
        .header__inputBtn{
            width: 44px;
            height: 44px;
            background-color: transparent;
            border: 0;
            cursor: pointer;
            position: absolute;
            top: -2px;
            right: -20px;
        }
        .header__inputBtn img{
            width: 75%;
        }
    </style>
    <form class="header__searchBar">
        <input 
        type="text"
        class="header__input">
        <button
        type="submit"
        class="header__inputBtn"
        ><img src="./searchIcon.png"></button>
    </form>
    `;
  }
}

customElements.define('search-bar', Searchbar);
