import axios from 'axios';

const ENDPOINT = 'http://localhost:5050';

const instance = axios.create({
    baseURL: ENDPOINT,
    timeout: 1000,
    headers: { 'X-Inetum-Header': 'foobar' }
});


instance.interceptors.request.use(function (config) {
    // faire quelque chose avant que la requête ne soit envoyée
    console.log('Request', config);
    return config;
}, function (error) {
    // faire quelque chose en cas d’erreur
    console.log('Request Error', error);
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    // n’importe quel code de réponse HTTP dans la plage 2xx activera cette
    // fonction
    // faire quelque chose avec les données de la réponse
    
    console.log('Response', response);
    // response.data = response.data.slice(0, 5);
    return response;
}, function (error) {
    // n’importe quel code de réponse HTTP hors de la plage 2xx activera cette
    // fonction
    // faire quelque chose avec les données de l’erreur
    console.log('Response Error', error);
    return Promise.reject(error);
});

export {instance as http}

