const Add = {
    init(){
        this._initialListener()
    },

    _initialListener(){
        const addBookForm = document.getElementById('addBookForm')
        addBookForm.addEventListener('submit', (event)=>{
            event.preventDefault()
            event.stopPropagation()

            addBookForm.classList.add('was-validated')
            this._sendPost()
        })
    },

    _sendPost(){
        const formData = this._getFormData()

        if(this._validateFormData({...formData})){
            console.log(formData)
        }
    },

    _getFormData(){
        const nameInput = document.querySelector('#validationCustomBookName')
        const dateInput = document.querySelector('#validationCustomDate')
        const descriptionInput = document.querySelector('#validationCustomDescription')
        const imageInput = document.querySelector('#validationCustomImage')

        return {
            name: nameInput.value,
            date: dateInput.value,
            description: descriptionInput.value,
            image: imageInput.files[0]
        }
    },

    _validateFormData(formData){
        const formDataFiltered = Object.values(formData).filter((item)=>item==='')

        return formDataFiltered.length === 0
    },

    _goToDashboardPage(){
        window.location.href = '/'
    }
}

export default Add