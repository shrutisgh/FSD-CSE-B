function register() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('register end');
            resolve();
        }, 2000);
    });
}

function sendEmail() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('send email end');
            resolve();
        }, 3000);
    });
}

function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('login end');
            resolve();
        }, 1000);
    });
}

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('get data end');
            resolve();
        }, 2000);
    });
}

function displayData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('display data end');
            resolve();
        }, 2000);
    });
}

// Async/Await to run sequentially
async function processRegistration() {
    console.log('call other application'); // still runs first if placed here
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
}

processRegistration();
