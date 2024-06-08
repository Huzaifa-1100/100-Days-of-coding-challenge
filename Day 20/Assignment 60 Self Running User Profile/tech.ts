// Question 60

// Making a self running user Profile

let userProfile = (function () {
  let userName = "Eric";
  let age = 28;
  return {
    displayInfo: function () {
      console.log(`Name: ${userName} \nAge: ${age}`);
    },
  };
})();

userProfile.displayInfo();
