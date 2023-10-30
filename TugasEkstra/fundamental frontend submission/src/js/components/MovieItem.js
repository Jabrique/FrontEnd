class MovieItem extends HTMLElement{
    constructor(){
        super()
        this.shadowDom = this.attachShadow({mode: "open"})
    }

    set movie(movie){
        this._movie = movie
        this.render()
    }

    render(){
        this.shadowDom.innerHTML = `
            <div class="movie-item">
                <p>${this._movie.title}</p>
                <p>${this._movie.vote_average}</p>
            </div>
        `
    }
}

customElements.define('movie-item', MovieItem)