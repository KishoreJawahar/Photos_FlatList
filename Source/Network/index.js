import axios from 'axios';

export const api = {
    makeSettingsAPICall(page) {
        return axios.get('https://jsonplaceholder.typicode.com/photos?_start=' + page + '&_limit=15')
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                return error;
            })
    }
};
