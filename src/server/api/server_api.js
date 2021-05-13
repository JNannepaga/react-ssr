import axios from 'axios';

const baseURL = 'http://localhost:49266/api/';

export const server_api = (cookie) => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "cookie" : cookie
            //"Authorization" : `Bearer ${jwt_token}`
        },
        namer: 'server'  
    })
};
