import {baseUrl} from '/mempedia/src/scripts/variables.js';

class ApiHandler {
    #auth_token= '';

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            method: 'get',
            headers: this.#build_header(),
        }).then((response) => response.json());
    }

    put(endpoint, body) {
        return this.#send('put', endpoint, body);
    }

    post(endpoint, body) {
        console.log(body);
        return this.#send('post', endpoint, body);
    }

    delete(endpoint, body) {
        return this.#send('delete', endpoint, body);
    }

    #build_header() {
        const currentHeaders = new Headers();
        this.#auth_token = sessionStorage.getItem('token');
        if (this.#auth_token !== '' || this.#auth_token !== undefined) {
            currentHeaders.append('Authorization', this.#auth_token);
        }
        currentHeaders.append('accept', 'application/json');
        currentHeaders.append('content-type', 'application/json');
        return currentHeaders;
    }

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: this.#build_header(),
            body: JSON.stringify(body),
        }).then((response) => {
            return response.json();
        });
    }
}

export const API = new ApiHandler(baseUrl);
