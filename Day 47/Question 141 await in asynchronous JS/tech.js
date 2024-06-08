"use strict";
// Question 141
// Discuss the significance of the await reserved word in asynchronous JavaScript.
Object.defineProperty(exports, "__esModule", { value: true });
// taking api url from json placeholder
let url = "https://jsonplaceholder.typicode.com/posts/1";
// async function using await to fetch data
let fun = async () => {
    // Fetching data
    let data = await fetch(url);
    // Converting data into json format
    let response = await data.json();
    console.log(response);
};
fun();
