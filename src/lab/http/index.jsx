import axios from 'axios'

console.log('Http Experiment');


/**
 * API Natives
 */

/* 
const xhr = new XMLHttpRequest();
xhr.open('GET', `${ENDPOINT}/messages`);
xhr.send();
xhr.onload = () => console.table(JSON.parse(xhr.response)); 
*/

// fetch(ENDPOINT + '/messages').then(response => response.json()).then(console.table);

/**
 * Best Pratices
 * Ne pas faire de requêtes directement dans les composants.
 * Ne pas utiliser directement les API natives dans le code.
 * Utiliser un WRAPPER configutrable.
 */


// axios.get(ENDPOINT + '/messages').then(response => console.table(response.data));
/* 
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

instance.get('/messages').then(response => console.table(response.data));


 */