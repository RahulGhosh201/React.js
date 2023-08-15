//We use react specifically for the ui potion so we always want to write code as less as we can
//react actually allow you to write html inside of javascript but it's not html it is actually the modified
//version of html named jsx. It's actually one of the best part of react as it allows you to write
//conditionals, regular logic.
//Mainly ternary operators are used to minimize the amount of line of codes we are writing 

let age=15;
// let name="Rahul";
// if(age>10){
//     name="Rahul";
// }else{
//     name="Rohit";
// }

//the if-else condition statement can be replaced by using ternary operator
//like this-
let name= age>10 ? "Rahul" : "Rohit";

//use of this in react--
const Component=()=>{
    return age>10 ? <div>Rauhl</div> : <div>Rohit</div>;
};

//Another example
let color="green";
let isCorrect="false";

color=isCorrect?"green":"red";
//here it says if the color is false then it will be red otherwise it is green.