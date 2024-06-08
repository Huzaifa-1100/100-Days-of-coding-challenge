// Question 54

// Making flexible function Object
function dynamicObj(key: string, value: string) {
  let dynamicObject = { [key]: value };

  return dynamicObject;
}

// print
console.log(dynamicObj("Manufacturer", "Honda"));
