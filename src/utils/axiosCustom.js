import axios from 'axios';
const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)

/**
 * Axios instance with baseURL and custom configurations
 */
const newAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASEURL}`
})

newAxios.interceptors.request.use(
    request => {
        if(request.url.includes('api')) request.headers['Authorization'] = token;
        return request;
    },
    error => {
        return Promise.reject(error)
    }
);

export default newAxios;
