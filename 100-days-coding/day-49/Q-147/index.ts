function fetchData(callback: (error: Error | null, data?: string) => void): void {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";

    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully
    } else {
        callback(error); // Error occurred
    }
}

// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
    if (error) {
        console.error(error.message); // Handles the error
    } else {
        console.log(data); // Processes the data
    }
});
