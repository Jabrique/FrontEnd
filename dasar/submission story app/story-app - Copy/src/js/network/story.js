import axios from "axios";
import apiEndpoint from "../config/api-endpoint";
import Utils from "../utils/utils";
import Config from "../config/config";

const Story = {
    async AddNewStory({description, photo}){
        const data = {description, photo}
        return await axios.post(apiEndpoint.ADDNEWSTORY,data, {
            headers: {
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    async AddNewStoryGuest({name, date, description, photo}){
        const data = {name, date, description, photo}
        return await axios.post(apiEndpoint.ADDNEWSTORYGUEST, data)
    },

    async GetAllStories(){
        return await axios.get(apiEndpoint.GETALLSTORIES, {
            headers: {
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`
            }
        })
    },

    async GetDetailStory(id){
        return await axios.get(apiEndpoint.DETAILSTORY(id), {
            headers: {
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`
            }
        })
    }
}

export default Story