class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
            <style>
                .movie-item{
                    box-shadow: 0 1px 10px rgba(0,0,0,.4);
                    overflow: hidden;
                    border-radius: 10px;
                    height: 400px;
                }
                .movie-item__img{
                    width: 100%;
                    height: 300px;
                    background-size: cover;
                    transition: .3s;
                }
                .movie-item__img:hover{
                    transform: scale(1.05);
                }
                .movie-item__text{
                    padding: 0 10px;
                    display: flex;
                    justify-content: space-between;
                    gap: 30px;
                }
                .movie-item__title{
                    font-weight: bold;
                }
                .movie-item__rating{
                    padding: 10px;
                    border-radius: 5px;
                    font-weight: 600;
                    background-color: #e7e7e7;
                }
            </style>
            <div class="movie-item">
                <img 
                class="movie-item__img" 
                src="https://image.tmdb.org/t/p/w300${this._movie.poster_path}">
                <div class="movie-item__text">
                    <p class="movie-item__title">${this._movie.title}</p>
                    <p class="movie-item__rating">${Math.round(this._movie.vote_average * 10) / 10}</p>
                </div>
            </div>
        `;
  }
}

customElements.define('movie-item', MovieItem);
