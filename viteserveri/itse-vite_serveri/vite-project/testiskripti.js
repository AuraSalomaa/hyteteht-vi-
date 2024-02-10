import cors from 'cors'
//  app.use(cors())

// async function asynchronousFunction() {                 // asynchronous function is defined by the async keyword
//     console.log('asynchronous download begins');
//     try {                                               // error handling: try/catch/finally
//         const response = await fetch('https://reqres.in/api/users?page=2');    // starting data download, fetch returns a promise which contains an object of type 'response'
//         const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
//         console.log(jsonData.data[0]);    // log the result to the console
//     } catch (error) {
//         console.log(error.message);
//     } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
//         console.log('asynchronous load complete');
//     }
// }
async function asynchronousFunction2() {                 // asynchronous function is defined by the async keyword
    console.log('asynchronous download begins');
    try {                                               // error handling: try/catch/finally
        const response = await fetch('https://api.chucknorris.io/jokes/random');    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData.value);
        const joke = jsonData.value
        document.querySelector('p').innerHTML = joke // log the result to the console
    } catch (error) {
        console.log(error.message);
    } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
        console.log('asynchronous load complete');
    }
}
// async function asynchronousFunction3() {                 // asynchronous function is defined by the async keyword
//     console.log('asynchronous download begins');
//     try {                                               // error handling: try/catch/finally
//         const response = await fetch('http://127.0.0.1:3000/items');    // starting data download, fetch returns a promise which contains an object of type 'response'
//         const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
//         console.log(jsonData);  // log the result to the console
//     } catch (error) {
//         console.log(error.message);
//     } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
//         console.log('asynchronous load complete');
//     }
// }

// asynchronousFunction3()

// asynchronousFunction();
asynchronousFunction2();


 
// https://api.chucknorris.io/jokes/random


