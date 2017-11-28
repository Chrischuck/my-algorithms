//  Given an input string and a dictionary of words,
//  find out if the input string can be segmented into a space-separated sequence of dictionary words.
//  See following examples for more details.

const wordBreak = function(list, word) {
  const matrix = []
  for (let i = 0; i <= list.length; i++) {
      const array = []
      for (let j = 0; j <= word.length; j++) {
          if (i === 0 && j === 0) {
              array.push(true)
          } else {
              array.push(false)
          }
      }
      matrix.push(array)
  }
  for (let l = 1; l <= list.length; l++) {
      for (let w = 1; w <= word.length; w++) {
          if (
              list[l - 1] === getSubstring(word, w - list[l - 1].length, w)
              ) {
              matrix[l][w] = true
          } else {
              matrix[l][w] = false || matrix[l - 1][w]
          }
      }
  }
  return matrix[list.length][word.length]
}

const getSubstring = function(word, start, end) {
    if (start > end || start < 0) {
        return ''
    }
    let str = ''

    for (let i = start; i < end; i++) {
       str += word[i]
    }
    return str
}

const wordBreakList = ['i', 'like', 'sung', 'sam', 'samsung',' mobile', 'ice', 
'cream', 'icecream', 'man', 'go', 'mango']
const word = ['i', 'l', 'i', 'k', 'e', 's', 'a', 'm', 's', 'u', 'n', 'g']
const word2 = ['s', 'a', 'm', 'l', 'i', 'k', 'e', 'm', 'a', 'n', 'g', 'o']

console.log(wordBreak(wordBreakList, word2))