const Dashboard = {
    async init(){
        await this._initialData()
    },

    async _initialData(){
        const fetchBooks = await fetch('/data/DATA.json')
        const responseBooks = await fetchBooks.json()
        this._userBooks = responseBooks.listStory
        this._populateBooksDataToCard(this._userBooks)
    },

    _populateBooksDataToCard(booksData){
        if(!(typeof booksData === 'object')){
            throw new Error(`Parameter booksData should be an object. The value is ${booksData}`)
        }

        if(!Array.isArray(booksData)){
            throw new Error(`Parameter booksData should be an array. The value is ${booksData}`)
        }
        console.log(booksData)
        document.querySelector('card-list').setAttribute('cardArray', JSON.stringify(booksData))
    }
}

export default Dashboard