
// * Difference between scope
// var is functional scope
function printName(print){
    if(print){
        var name = 'Jehad';
    };
    console.log(name)
}
printName(true);


// let and const are block scope
function printAge(print){
    if(print){
        let age = 9;
    }
    else{
        const age = 10
    };
    console.log(age)
};

// printAge(true);


// * difference on hoisting
// variable declaired with var is hoisted globally

console.log(devName); // undefined
var devName = 'Jehad Hossain';

// variable declared with let and cost is hoisted on the 'Temporal Dead Zone'
// console.log(devAge, devLanguage); // reference error: variable not defined
const devAge = 19;
const devLanguage = 'JavaScript';


// * declaring private variable
// we used IIFE (Immediately Invoked Functional Expression) = to declare private variables on es5

(function pvtFunc(){
    var name = 'Jehad Hossain';
    var age = 18;
    console.log(name , age)
})();

// console.log(name, age) // reference error

// because , let and const are block scope
// wrap let and const with {} to create pvt variables
{
    let age = 18;
    const name = 'Jehad Hossain';
}