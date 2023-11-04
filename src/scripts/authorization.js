import {API} from '/mempedia/src/scripts/api_handler.js';
import {
    frontEndBaseUrl, loginEndpoint, homeUrlEndpoint,
} from '/mempedia/src/scripts/variables.js';

const login = () => {
    document.querySelector('#login-form').addEventListener(
        'submit', (event) => {
            event.preventDefault();
            API.post(loginEndpoint, {
                username: document.querySelector('#login-form #username').value,
                password: document.querySelector('#login-form #password').value,
            }).then(
                (data) => {
                    if (data.token_type !== undefined && data.access_token !== undefined) {
                        sessionStorage.setItem('token', `${data.token_type} ${data.access_token}`);
                        location.replace(frontEndBaseUrl + homeUrlEndpoint);
                    }
                },
            ).catch(() => {});
        },
    );
};

login();
