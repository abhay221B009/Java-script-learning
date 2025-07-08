//create a function  using function keyword and take a string as an argument and return the number of vowels in the string

function findVowel(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].toLowerCase() == "a" ||
      s[i].toLowerCase() == "e" ||
      s[i].toLowerCase() == "i" ||
      s[i].toLowerCase() == "o" ||
      s[i].toLowerCase() == "u"
    ) {
      cnt++;
    }
  }
  return cnt;
}

let numVowels = findVowel("AEIOU");
console.log(numVowels);

const findVowelArrow = (s) => {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].toLowerCase() == "a" ||
      s[i].toLowerCase() == "e" ||
      s[i].toLowerCase() == "i" ||
      s[i].toLowerCase() == "o" ||
      s[i].toLowerCase() == "u"
    ) {
      cnt++;
    }
  }
  return cnt;
};

findVowelArrow("aeiou");
let numVowelsArrow = findVowelArrow("aeiou");
console.log(numVowelsArrow);
