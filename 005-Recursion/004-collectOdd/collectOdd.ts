//Write a function that collects the odd value in an array

const collectOddValue = (arr: number[]) => {
  let result: number[] = [];

  //Helper recursive function

  function helperRecursive(helperInput: number[]) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helperRecursive(helperInput.slice(1));
  }

  helperRecursive(arr);

  return result;
};

console.log(collectOddValue([1, 2, 3, 4]));

function collectOddValuePureRecursion(arr: number[]) {
  let newArr: number[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuePureRecursion(arr.slice(1)));

  return newArr;
}
