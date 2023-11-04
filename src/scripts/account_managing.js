const setAccount = () => {
    const form = document.querySelector('#current-user-account-form');
    const account = JSON.parse(sessionStorage.getItem('stored_account'));
    console.log(account)
    if (account) {
        Object.entries(account).forEach(
            (entry) => {
                console.log(entry[0], entry[1]);
                form.querySelector(`#${entry[0]}`).value = entry[1];
            },
        );
    }
};

window.onload = function() {
    setAccount();
};
