//Given two string, write a function to determine if the second string is an anagram of the first. An anagram is a word phrase, or name formed by rearranging the letters of another

/**
 * validAnagram('iceman','cinema') === true
 * validAnagram('rat','tar') === true
 * validAnagram('rat','car') === false
 */

export function anagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  let frequencyCounter1: any = {};
  let frequencyCounter2: any = {};

  for (const char of str1.toLowerCase()) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (const char of str2.toLowerCase()) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

const validateAnagram = anagram("read ", " dear");

console.log(validateAnagram);

// const validAnagram2 = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   let frequencyLookup = {};

//   for (const char of str1) {
//     frequencyLookup[char] = ++frequencyLookup[char] || 1;
//   }

//   for (const char of str2) {
//     if (!frequencyLookup[char]) return false;
//     frequencyLookup[char] -= 1;
//   }

//   console.log(frequencyLookup);
//   return true;
// };

// const validateAnagram2 = validAnagram2("reaadk ", " adear");
// console.log(validateAnagram2);
