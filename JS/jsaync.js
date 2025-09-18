function register(cb){
    setTimeout(() => {
    console.log("Registered Successfully");
    cb();
},5000);
}
function sendEmail(cb){
   setTimeout(() => {
    console.log("Email sent Successfully");
    cb();
},5000);
}
function login(cb){
    setTimeout(() => {  
    console.log("Login Successfully");
    cb();
},5000);
}
function getData(cb){
   setTimeout(() => {
    console.log("Data fetched Successfully");
    cb();
},5000);
}
function displayData(cb){
   setTimeout(() => {
    console.log("Data updated Successfully");
    cb();
},5000);
}
// function waitForFiveSeconds(){
//     const ms=new Date().getTime()+5000;
//     while(new Date().getTime()<ms){

//     }
   
// }
register(function(){
    sendEmail(function(){
        login(function(){
            getData(function(){
                displayData(function(){
                    console.log("End of program");
                });
            });
        });
    });
});
register();
sendEmail();
login();
getData();
displayData();
console.log("End of program");
