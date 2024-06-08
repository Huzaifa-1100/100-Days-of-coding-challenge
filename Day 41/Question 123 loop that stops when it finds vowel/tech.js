// Question 123:
// Create a loop that iterates through a string and stops when it finds the first vowel.
var findVowel = function (string) {
    var vowel = "aeiouAEIOU";
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var char = string_1[_i];
        if (vowel.includes(char)) {
            console.log("First vowel found \"".concat(char, "\""));
            break;
        }
    }
};
findVowel("typescript");
