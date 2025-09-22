function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false; // set true to simulate error
            if (error) reject("Register failed");
            else {
                console.log("register end");
                resolve();
            }
        }, 2000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) reject("Send email failed");
            else {
                console.log("send email end");
                resolve();
            }
        }, 3000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) reject("Login failed");
            else {
                console.log("login end");
                resolve();
            }
        }, 1000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) reject("Get data failed");
            else {
                console.log("get data end");
                resolve();
            }
        }, 2000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) reject("Display data failed");
            else {
                console.log("display data end");
                resolve();
            }
        }, 2000);
    });
}

// Sequential execution with single error handler at the end
async function mainProcess() {
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    console.log("All steps completed successfully!");
}

// Call with a single catch at the end
mainProcess().catch(err => {
    console.log("Error occurred:", err);
});
