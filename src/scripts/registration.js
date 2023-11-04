import {API} from '/mempedia/src/scripts/api_handler.js';
import {
    frontEndBaseUrl, loginUrlEndpoint, createUserEndpoint,
} from '/mempedia/src/scripts/variables.js';

const register = () => {
    document.querySelector('#registration-form').addEventListener(
        'submit', (event) => {
            event.preventDefault();
            const password = document.querySelector('#registration-form #password').value;
            if (password !== document.querySelector('#registration-form #confirmPass').value) {
                return false;
            }
            API.post(createUserEndpoint, {
                nickname: document.querySelector('#registration-form #username').value,
                name: document.querySelector('#registration-form #firstName').value,
                lastname: document.querySelector('#registration-form #lastName').value,
                login: document.querySelector('#registration-form #email').value,
                password: document.querySelector('#registration-form #password').value,
            }).then(
                (data) => {
                    if (data.Success) {
                        location.replace(frontEndBaseUrl + loginUrlEndpoint);
                    }
                },
            ).catch(() => {});
        },
    );
};

register();
