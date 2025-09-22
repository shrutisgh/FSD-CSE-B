function register(){
    waitfortwoseconds();
    console.log('register end')

}
function sendEmail(){
    waitfortwoseconds();
    console.log('email send end')

}
function login(){
    waitfortwoseconds();
    console.log('login end')

}
function getData(){
    waitfortwoseconds();
    console.log('get data end')

}
function displayData(){
    console.log('Display Data end')

}
function waitfortwoseconds(){
    const ms=new Date().getTime()+8000;
    while(new Date().getTime()<ms)
    {}
}
register();
sendEmail();
login();
getData();
displayData();
console.log('call other application')