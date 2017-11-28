//  A subsequence is a sequence that can be derived from another sequence
//  by deleting some elements without changing the order of the remaining elements.
//  Longest common subsequence (LCS) of 2 sequences is a subsequence, with maximal length,
//  which is common to both the sequences. 
//  Given two sequence of integers, A = [a1, a2, a3,..., aN] and B = [b1, b2, b3,...,bN], find any one longest common subsequence.

const longestCommonSubSeq = function(array1, array2) {
  const matrix = []
  for (let i = 0; i <= array2.length; i++) {
      matrix.push([])
  }

  for (let i = 0; i <= array1.length; i++) {
      for (let j = 0; j <= array2.length; j++) {
          if (i == 0 || j == 0) {
              matrix[i][j] = 0
          } else if (array1[i-1] === array2[j-1]) {
              matrix[i][j] = matrix[i-1][j-1] + 1
          } else {
              matrix[i][j] = matrix[i-1][j] > matrix[i][j-1] ? matrix[i-1][j] : matrix[i][j-1]
          }
      }
  }
  return matrix[array1.length][array2.length]
}