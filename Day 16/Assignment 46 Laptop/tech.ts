// Question No. 46
// Making object
let laptop = {
  make: "HP",
  model: "8500",
  year: "2020",
  describe: function(){
    console.log(`This laptop is a ${this.make + ` ` + this.model + ` ` + this.year}`)
  }

}

laptop.describe()