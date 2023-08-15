//objects are konown as dictionaries in python, both of these are used to store collections of key-value pairs.
//keys are the unique identifiers and values can be of any data type.
//In java it is quite similar to class
//In c++ it is quite similar to maps

//Example of object---

    //creating an object-
    const person ={
        firstName: "Rahul",
        lastName: "Ghosh",
        age: 30,
    };//here person is object where fisrtName ,age these are the keys and Rahul, Ghosh these are the values keys are unique in nature where as the values can be modified later on.

    //accessing values using keys-
    console.log(person.firstName);
    console.log(person[lastName]);

    //Modyfying values-
    person.age=15;
    console.log(person.age);

    //adding a new key-value pair
    person.city="New York";
    console.log(person.city);


//Or 
const name="Rohit";
const age="24";

const person={
    name,
    age,
};

const person2={...person,name:"Ron"};//it will create another object named person who has all the details of person object but the name of this object is differnt

const names=["Pedro","Jack","Jessica"];
const names2=[...names,"Joel"];//in case of this all the names present in the names array will be contained in the names2 array along with new name joel



