// Question 51

// Making a simple function
function areaOfRectangle (length: number, width: number){
    return length * width
}

// Refactoring to Arrow Functions
let refacAreaOfRectangle = (length:number, width: number) => length * width

// calling function
console.log(refacAreaOfRectangle(3, 10));
