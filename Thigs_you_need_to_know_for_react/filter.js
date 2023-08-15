let names=["Pedro", "Jessica", "Carol"];

names.map((name)=>{
    conosole.log(name);
})//it will show each name present in the names array in the console

names.map((name)=>{
    return name+"1";//pedro1,jessica1,carol1
})

names.map((name)=>{
    return <h1>{name}</h1>;
})//it will create header file named each name in the names array.

let names1=["Rahul","Ronit","Rohit","Rahul"];
names1.filter((name)=>{
    return name!=="Rahul";
})//then it will remove all the "Rahul" from the names array.

