// statement function and declartion function both are same 

// function a()
// {
//     console.log("a called");

// }


// // expression function
// function xyz(){
//     console.log("xyz");
// }
// function a(){
//     console.log("a called")
// }

// var b = function xyz()
// {
//     console.log(xyz);
// }

// a();
// b();
// xyz();





// Anonymous function ---A function without a name of function is called anonymous function. its same like statement function.

// function()
// {

// }

// Named expression function ---Named expression function is same like expression function. we give name to a function...

// var b = function xyz(){
//     console.log("b called")
// }

// function sayHello(){
//     return () =>{
//         console.log("Hello!");
//     }
// }


// sayHello();

// call back function 

// setTimeout(function() {
// console.log("Hello Javacript");
// }, 5000);

function x(y){
    console.log("I am a syncronous language");
    y();
}

x(function xyz(){
    console.log("I am a block thread")
});

