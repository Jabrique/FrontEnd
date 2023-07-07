const Dashboard = {
    async init(){
        await this._initialData()
        this._initialListener()
    },

    async _initialData(){
        const fetchBooks = await fetch('/data/DATA.json')
        const responseBooks = await fetchBooks.json()
        this._userBooks = responseBooks.listStory
        this._populateBooksDataToCard(this._userBooks)
    },

    _initialListener(){
        const bookDetailModal = document.getElementById('bookDetailModal')
        bookDetailModal.addEventListener('show.bs.modal', (event)=>{
            const button = event.relatedTarget
            const dataBook = this._userBooks.find((item)=>{
                console.log(button)
                return item.id == button.dataset.recordId
            })

            this._populateBooksDataToModal(dataBook)
        })
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
    },

    _populateBooksDataToModal(booksData){
        if(!(typeof booksData === 'object')){
            throw new Error(`Parameter booksData should be an object. The value is ${booksData}`)
        }
        
        const imgDetailBook = document.querySelector('#imgDetailBook')
        const nameDetailBook = document.querySelector('#nameDetailBook')
        const dateDetailBook = document.querySelector('#dateDetailBook')
        const descriptionDetailBook = document.querySelector('#descriptionDetailBook')

        imgDetailBook.setAttribute('src', booksData.photoUrl)
        imgDetailBook.setAttribute('alt', booksData.name)
        nameDetailBook.innerText = booksData.name

        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const language = new URL(window.location.href).searchParams.get('lang') || 'en'
        dateDetailBook.innerText = new Date(booksData.createdAt).toLocaleDateString(language, options)
        descriptionDetailBook.innerText = booksData.description
    }
}

export default Dashboard