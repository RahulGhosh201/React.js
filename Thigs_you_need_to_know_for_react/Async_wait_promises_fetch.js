//asynch and wait is used always together.
//these two keywords are used to work with asynchronous code in a more readable and synchronous like manner.
// It's introduced in ECMAScript 2017(ES8).
//mainly asynch is used for defining a function where inside the function await is used for a part of code where we want to stop the execution of that part
//of the code momentarily for getting the fetch data or response 



async function fetchData() {
    // Asynchronous code using await
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }

//in this code as we can see fetchData function uses asynch keyword

//const response = await fetch('https://api.example.com/data'); in this line
//   await keyword is used to pause the execution of the function till the fetch promise is resolved.
//   the fetch function is used to make an HTTP request to the specified url to rerieve data from the api
//   the response variable will hold th dat once the promise is resolved.



//Promise------
//  In javascript promise is a built in objct that represents a value that might be available now or in the future or never.
//  Promises are generally used for handling asynchronous operations like fetching data from
//  a server, reading files or performing any operation that might take some time to complete.
//  Promises are a better replacement of using traditional call back approaches.
//  They help to avoid callback hell or "Pyramid of doom".
//  Callback hell is a situation in js where multiple nested callbacks are used to handle asynchromous operations
//  fetchData(function(data1) {
//   process(data1, function(data2) {
//     processData(data2, function(data3) {
//       // ... and so on
//     });
//   });
// });
//  above code is an example of callback hell or "Pyramid of doom".

//      A promise can be of three states-
//           1.Pending-
                // The initial state when a promise is just created.It's neither fullfilled or rejected.
        //   2.Fulfilled- the state when the promise is successfully resolved with a value. This is often refered to as resolved.
        //   3.Rjected-  The state when the promise has failed to fulfills it's intended operation. 

        // Code using promise--
        const fetchData = new Promise((resolve, reject) => {
            // Simulate an asynchronous operation
            setTimeout(() => {
              const data = { message: "Data fetched successfully" };
              // Resolve the promise with the data
              resolve(data);
              // OR reject the promise with an error
              // reject(new Error("Failed to fetch data"));
            }, 2000); // Simulating a 2-second delay
          });
          
          // Consuming the promise using then() and catch()
          fetchData.then(data => {
            console.log(data.message); // Output: Data fetched successfully
          }).catch(error => {
            console.error(error.message);
          });
          