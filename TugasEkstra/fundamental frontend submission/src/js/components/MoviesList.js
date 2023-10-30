class MoviesList extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set movies(movies) {
    this._movies = movies.data.results;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
        :host{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            width: 100%;
            justify-content: center;
        }
        
        @media screen and (max-width: 1024px) {
            :host{
                grid-template-columns: repeat(3,1fr);
                gap: 40px;
            }
        }
        @media screen and (max-width: 768px) {
            :host{
                grid-template-columns: repeat(2,1fr);
                gap: 40px;
            }
        }
        @media screen and (max-width: 576px) {
            :host{
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }
    </style>
    `
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.shadowDom.appendChild(movieItemElement);
    });
  }
}

customElements.define('movies-list', MoviesList);
