//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

export const checkDuplicate = (data: string | number) => {
  const lookup: any = {};

  for (const val of data.toString().toLowerCase()) {
    lookup[val] = ++lookup[val] || 1;
  }

  for (const val in lookup) {
    if (lookup[val] > 1) {
      return true;
    }
  }
  return false;
};

// console.log(checkDuplicate("abca"));
