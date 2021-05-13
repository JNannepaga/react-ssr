import axios from 'axios';

export const client_api = () => {
    return axios.create({
        baseURL: '/api',
        headers: {
            "Access-Control-Allow-Origin": "*",
            //"Authorization" : `Bearer ${jwt_token}`
        },
        namer: 'client' 
    })
};
