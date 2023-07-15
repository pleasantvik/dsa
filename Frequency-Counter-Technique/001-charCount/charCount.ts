// Write a function that takes in a string and return the count of each character
export function charCount(str: string | number) {
  // Make object to return at the end
  const result: any = {};

  // Loop over the string for each character

  for (let char of str.toString().toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      //   result[char] > 0 ? result[char]++ : (result[char] = 1);

      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

console.log(charCount("Java is fun"));
