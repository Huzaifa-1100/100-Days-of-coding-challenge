// Question 147 Explain how to handle errors in a callback pattern
// Fetch that simulates an asyncronous operation
function fetchData(callback) {
    // Simulating Asynchronous operation using setTimeout
    setTimeout(function () {
        // Randomly producing weather to produce an error or data
        var error = Math.random() > 0.5 ? new Error("Fail to fetch data") : null;
        var data = error ? null : { id: 123, name: "Eric" };
        // Invoking the callback with error and data
        callback(error, data);
    }, 2000);
}
// Using the fetchData with a callback
fetchData(function (error, data) {
    if (error) {
        // Handle the error
        console.log("Error: ", error);
    }
    else {
        // Process the successful result
        console.log("Data: ", data);
    }
});
