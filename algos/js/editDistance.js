//  Given two strings str1 and str2 and below operations that can performed on str1.
//  Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.
//  Insert
//  Remove
//  Replace
//  All of the above operations are of equal cost.

const editDistance = function(str1, str2) {
  const matrix = []
  for (let i = 0; i <= str1.length; i++ ) {
      let array = []
      for (let j = 0; j <= str2.length; j++) {
          array.push(0)
      }
      matrix.push(array)
  }

  // compare through can cant how many differences as you add each character to the string
  // i.e. start with two empty strings, add first char, do again
  for (let i = 0; i <= str1.length; i++) {
      for (let j = 0; j <= str2.length; j++) {        
          if (i === 0) { // if str1 is length 0, delete everything in str2
              matrix[i][j] = j
          } else if(j === 0) { // if str2 is 0, delete everything in str1
              matrix[i][j] = i
          } else if (str2[j - 1] === str1[i - 1]) { // if str2[i - 1] === str[j - 1] use diagonal
              matrix[i][j] = matrix[i-1][j-1]
          } else {
              // add one because you needa add a move
              matrix[i][j] = 1 + Math.min( // if they're different, take minimum of left, up, diagonal and add 1
              matrix[i-1][j-1], //replace
              matrix[i][j-1], // insert
              matrix[i-1][j] //remove
              )         
          }
      }
  }
  console.log(matrix)
  return matrix[str1.length][str2.length]
}

const str1 = ['a', 'l', 'g', 'o', 'r', 'i', 't', 'h', 'm', 'b']
const str2 = ['l', 'o', 'g', 'a', 'r', 'i', 't', 'h', 'm']
console.log(editDistance(str1, str2))