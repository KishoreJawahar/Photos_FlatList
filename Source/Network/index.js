import axios from 'axios';

export const api = {
    makeSettingsAPICall() {
        return axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                return error;
            })
    }
};
