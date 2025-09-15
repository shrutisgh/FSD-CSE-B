function register(){
    console.log("register end");
    waitfortwoseconds()
}
function sendemail(){
    console.log("email end");
    waitfortwoseconds()
}
function login(){
    console.log(" login end");
    waitfortwoseconds()
}
function getData(){
    console.log("data end");
    waitfortwoseconds()
}   
function displayData(){
    console.log("Display end");
}
function waitfortwoseconds(){
    const ms=new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}
register();
sendemail();
login();
getData();
displayData();
console.log("other Application");