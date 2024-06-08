// Question 104
// function that generates a random hexadecimal color code
let ramdomHex = () => {
    // Generate Ramdom Hex #
    let hex = `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
    return hex;
};
// Calling fuction to show hex number color code
console.log(ramdomHex());
export {};
