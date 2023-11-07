import {API} from '/mempedia/src/scripts/api_handler.js';
import {
    frontEndBaseUrl, getUserEndpoint, accountUrlEndpoint, loginUrlEndpoint,
} from '/mempedia/src/scripts/variables.js';

const loadAccount = () => {
    document.querySelector('.navbar #navbar-account-tab').addEventListener(
        'click', (event) => {
            event.preventDefault();
            if (!sessionStorage.getItem('stored_account') ||
                sessionStorage.getItem('stored_account') === '{}') {
                API.get(getUserEndpoint).then(
                    (data) => {
                        sessionStorage.setItem('stored_account', JSON.stringify({
                            nickname: data.nickname,
                            email: data.login,
                            firstName: data.name,
                            lastName: data.lastname,
                            creationDate: data.creation,
                        }));
                        location.replace(frontEndBaseUrl + accountUrlEndpoint);
                    },
                ).catch((error) => {
                    console.log(error);
                });
            } else {
                location.replace(frontEndBaseUrl + accountUrlEndpoint);
            }
        },
    );
};

const logout = () => {
    document.querySelector('#navbar-logout-tab').addEventListener(
        'click', () => {
            location.replace(frontEndBaseUrl + loginUrlEndpoint);
            sessionStorage.clear();
        },
    );
};


loadAccount();
logout();
