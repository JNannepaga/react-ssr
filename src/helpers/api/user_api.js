import {api_helper} from '../api/api_helper';

export const getTokenAsync = (api, username, password) => {
    const buildUri = `SchoolManagement/Token`;
    const body = {UserName: username, Password: password, grant_type: password}
    console.log('hasini'+JSON.stringify(body));
    return api_helper(api).post(buildUri, body);  
};
