function register(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("Registered Successfully");
        resolve();
    },5000);
    });
    console.log("Registered Successfully");
}
function sendEmail(){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("Email sent Successfully");
        resolve();
    },5000);
    });
    console.log("Email sent Successfully");
}
function login(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {  
        console.log("Login Successfully");
        reject();
    },5000);
    });
    console.log("Login Successfully");
}
function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("Data fetched Successfully");
    resolve();
},5000);
    });
    console.log("Data fetched Successfully");
}
function displayData(){
    return new Promise((resolve,reject)=>{  
    setTimeout(() => {
    console.log("Data updated Successfully");
    resolve();
},5000);
    });
    console.log("Data updated Successfully");
}

// using promise
async function f1(){
    try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    console.log("End of program");
    }catch(err){
        console.error('Error is ',err);
    }
}
f1();
// register()
// sendEmail()
// login()
// getData()
// displayData()
// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err)=>{
//     console.log(err);
// });