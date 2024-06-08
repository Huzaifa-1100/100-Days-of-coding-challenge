// Question No 37
// making array

let make_shirt = (size:string = "large", message:string = "Free Palestine") => {
   console.log(`I am making a ${size} size T-Shit with the slogan "${message}" printed on it.`)
}

make_shirt() // default size & message
make_shirt("medium") //medium size & default message
make_shirt("small", "stand with Palestine") // small size & custom message

