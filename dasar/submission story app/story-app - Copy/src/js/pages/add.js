import Story from "../network/story"
import CheckUserAuth from "./auth/checkUserAuth"

const Add = {
    init(){
        CheckUserAuth.checkLoginState()

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

    async _sendPost(){
        const formData = this._getFormData()

        if(this._validateFormData({...formData})){
            console.log(formData)
            const response = await Story.AddNewStory({
                name: formData.name,
                date: formData.date,
                description: formData.description,
                photo: formData.image
            })

            alert(response.data.message)
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