import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://lamp.local/api/v1',
    headers: {
        'Accept-Language': 'en',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export default instance;