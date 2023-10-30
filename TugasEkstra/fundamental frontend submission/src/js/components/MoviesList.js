class MoviesList extends HTMLElement{
    constructor(){
        super()
        this.shadowDom = this.attachShadow({mode: "open"})
    }

    set movies(movies){
        console.log(movies)
        this._movies = movies.data.results
        this.render()
    }

    render(){
        this.shadowDom.innerHTML = ``
        this._movies.forEach((movie)=> { 
            const movieItemElement = document.createElement('movie-item')
            movieItemElement.movie = movie
            this.shadowDom.appendChild(movieItemElement)
        })
    }
}

customElements.define('movies-list', MoviesList)