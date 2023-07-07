import Config from "./config";

const apiEndpoint = {
    REGISTER: `${Config.BASE_URL}/register`,
    LOGIN: `${Config.BASE_URL}/login`,

    ADDNEWSTORY: `${Config.BASE_URL}/stories`,
    ADDNEWSTORYGUEST: `${Config.BASE_URL}/stories/guest`,
    GETALLSTORIES: `${Config.BASE_URL}/stories`,
    DETAILSTORY:(id)=>`${Config.BASE_URL}/stories/${id}`,
}

export default apiEndpoint