//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

export const checkForDuplicate = (data: string | number) => {
  let leftPointer = 0;
  let newData = data.toString().split("");
  let rightPointer = 1;

  while (rightPointer < newData.length) {
    if (newData[leftPointer] === newData[rightPointer]) {
      return true;
    }
    leftPointer++;
    rightPointer++;
  }
  return false;
};

console.log(checkForDuplicate("aaba"));
