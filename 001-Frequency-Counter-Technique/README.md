# Frequency Counter

- This pattern uses object or set to collect values/ frequency of values

`Use case`

- Comparing pieces of data to see if they match

## Pattern Explanation

- create an empty object to store the value of each string or array as key and VALUE as the number of times it occur

- Loop over the key in one object and comapre if it has a corresponding key in the second object

**EXAMPLE**
`Check if array in a is same as b`

`[1,2,3,1]  [2,2,1,1]`

- Create the object and compare
  `{1:1, 2:1, 3:1} {1:2, 2:2}`

- result: not the same

- Check if the value of each key in both objects correspond

`CHECK OUT CODE EXAMPLE IN THE FUNCTIONS CREATED`

- charCount
- same
- anagram
