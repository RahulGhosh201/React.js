 //sometimes while fetching data from external libraries or links we try to get access of the fields even before geting access of the object meaning suppose we are trying get access of the field that exists inthe object but evenbefore we can get access of the object we are trt+ying to get access of the field then it will crash our program.
 // so to know whether or not we can get access of the field we have to use an '?'
//  like-

// if we write 
const fetchData=async()=>{
    const data=await fetch("imginaryAPI.com");
    const name=data.person.name;
};//here imaginaryAPI is the object that we want to get access of
//and that will be stored in data variable and then when we are trying to get the person's name even before knowing all the data from imaginaryAPI it will cause problems 
//that's why we use optional chaining like this--
// const fetchData=async()=>{
//     const data=await fetch("imginaryAPI.com");
//     const name=data.person?.name;
// };//it will make sure that data has all the datas it needs before trying to access the object.
