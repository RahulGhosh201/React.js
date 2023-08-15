// Arrow functions are just a different way to define your functions.
function DoSomething(){
    //all the operations are written here.
}

const DoSomething=()=>{

}

//both of the above syntax is defining a function called DoSomething though the one using the arrow functon is more preferable and updated one.

//to export this function in case of 1st syntax,
export default function DoSomething(){

}
//however in case of 2nd synatx,we don't have to write the default part
export const DoSomething=()=>{

}

//the second one is more preferable because it's more appropiate for using in react ehere we write code like below
const MyFunction=()=>{
    //html code here
}

//In case of react using arrow function we can also declare anonymus function meaning a function which does not have any name to it.
// like this-
<button
    onClick={()=>{
        console.log("Hello World");
    }}
></button>
