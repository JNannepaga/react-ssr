export const api_helper = (api) => ({
    get: (uri) =>{
        return api.get(uri).then(resp => {
            return resp.data;
        }).catch(err => {
            throw err.message
        });
    },
    post: (uri, body) => {
        return api.post(uri, body).then(resp => {
            return resp.data;
        }).catch(err => {
            throw err.message
        });
    }
});
