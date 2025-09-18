function register(){
    waitForFiveSeconds();
    console.log("Registered Successfully");
}
function sendEmail(){
    waitForFiveSeconds();
    console.log("Email sent Successfully");
}
function login(){
    waitForFiveSeconds();
    console.log("Login Successfully");
}
function getData(){
    waitForFiveSeconds();
    console.log("Data fetched Successfully");
}
function displayData(){
    waitForFiveSeconds();
    console.log("Data updated Successfully");
}
function waitForFiveSeconds(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms){

    }
   
}
register();
sendEmail();
login();
getData();
displayData();
console.log("End of program");