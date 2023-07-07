import Config from "../../config/config"
import Auth from "../../network/auth"
import Utils from "../../utils/utils"
import CheckUserAuth from "./checkUserAuth"

const login = {
    init(){
        CheckUserAuth.checkLoginState()

        this._initialListener()
    },

    _initialListener(){
        const loginForm = document.getElementById('loginForm')
        loginForm.addEventListener('submit', async(event)=>{
            event.preventDefault()
            event.stopPropagation()

            loginForm.classList.add('was-validated')
            await this._getLogged()
        },
        false)
    },

    async _getLogged(){
        const formData = this._getFormData()

        if(this._validateFormData({...formData})){
            try{
                const response = await Auth.login({
                    email: formData.email,
                    password: formData.password
                })
                console.log(response)
                Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token)

                window.alert('Signed user in detected');

                this._goToDashboardPage()
            }catch(error){
                console.error(error)
            }
        }
    },

    _getFormData(){
        const email = document.querySelector('#validationCustomRecordEmail')
        const password = document.querySelector('#validationCustomRecordPassword')

        return {
            email: email.value,
            password: password.value
        }
    },

    _validateFormData(formData){
        const formDataFiltered = Object.values(formData).filter((item)=>item=== '')

        return formDataFiltered.length === 0;
    },

    _goToDashboardPage(){
        window.location.href = '/'
    }
}

export default login