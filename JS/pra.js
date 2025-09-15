// const x=20;
// let e=10;
// var b=30;
// console.log(a);
// {
//     var c=40;
//     console.log(c);
//     console.log(x);
//     console.log(e);
//     x++;
//     e++;
//         c++;
//         b++;
//         a++;
//         console.log(x);
//         console.log(e);
//         console.log(c);
//         console.log(b);
//         console.log(a);       
// }




// FUNCTIONS IN JS
// function add(a,b){
// function f1(user="guest"){
//     console.log(`hello,${user}`);  
// }
// f1();
// f1("john");


// const sum=(a,b)=>a+b;
// console.log(sum(10,20));
// function add(a,b){
//     console.log("before return");
//     return a+b;
//     console.log("after return");
// }
// console.log(add(10,20));



// IIFE    imidiate envoke function expression
// (function(){
//     console.log("hello");
// })();



// CALLBACK FUNCTION 
// function f1(user,login){
//    console.log(`hello,${user}`);
//    login();

// }
// function login(){
//     console.log("you are logged in");
// }







// Asynchronous Programming
//CALLBACK HEll
// function register(cb)
// {
//     setTimeout(()=>{
//         console.log("register end");
//         cb();
    
    
// },2000)

// register(()=>{
//     login(()=>{
//         sendEmail(()=>{
//             getUserData(()=>{
//                 displayUserData(()=>{
//                     console.log("all tasks done");
//                 })
//             })
//         })
//     });




// Synchronous Programming
// function execute one by one or sequencial programming


// function waitfortwoseconds()
// {
//     const ms=new Date().getTime()+8000;
//     while(new Date().getTime()<ms);
// }
// function register()
// {
//     waitfortwoseconds();
//     console.log("register end");
// }
// function sendemail()
// {
//     waitfortwoseconds();
//     console.log("email end");
// }
// function login()
// {
//     waitfortwoseconds();
//     console.log(" login end");
// }
// function getData()
// {
//     waitfortwoseconds();
//     console.log("data end");
// }
// function displayData()
// {
//     waitfortwoseconds();
//     console.log("Display end");
// }
// register();
// sendemail();
// login();
// getData();
// displayData();
// console.log("other Application")





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
console.log("other Application")
