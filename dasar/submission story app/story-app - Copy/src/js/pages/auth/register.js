import Auth from "../../network/auth"
import CheckUserAuth from "./checkUserAuth"

const register = {
    init(){
        CheckUserAuth.checkLoginState()

        this._initialListener()
    },

    _initialListener(){
        const registerForm = document.getElementById('registerForm')
        registerForm.addEventListener('submit', async(event)=>{
            event.preventDefault()
            event.stopPropagation()

            registerForm.classList.add('was-validated')
            await this._getRegistered()
        })
    },

    async _getRegistered(){
        const formData = this._getFormData()

        if(this._validateFormData({...formData})){
            try{
                const response = await Auth.register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })

                window.alert(response.data.message)
                this._goToLoginPage()
            }catch(error){
                console.error(error)
            }
        }
    },

    _getFormData(){
        const name = document.querySelector('#validationCustomRecordName')
        const email = document.querySelector('#validationCustomEmail')
        const password = document.querySelector('#validationCustomPassword')

        return {
            name: name.value,
            email: email.value,
            password: password.value
        }
    },

    _validateFormData(formData){
        const filteredData = Object.values(formData).filter(item=>item==='')

        return filteredData.length === 0;
    },

    _goToLoginPage(){
        window.location.href='/auth/login.html'
    }
}

export default register