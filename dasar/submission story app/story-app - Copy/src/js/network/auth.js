import axios from "axios";
import apiEndpoint from "../config/api-endpoint";

const Auth = {
    async register({name, email, password}){
        const data = {name, email, password}
        console.log(data)
        return await axios.post(apiEndpoint.REGISTER, data)
    },

    async login({email, password}){
        return await axios.post(apiEndpoint.LOGIN, {email, password})
    },
}

export default Auth;
