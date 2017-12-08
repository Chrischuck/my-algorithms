package main

import (
	"fmt"
	"math"
)

func editDistance(str1 string, str2 string) int {
	len1, len2 := len([]rune(str1)), len([]rune(str2))
	matrix := make([][]int, len1 + 1)

	for i := range matrix {
		matrix[i] = make([]int, len2 + 1)
	}

	for i := 0; i <= len1; i++ {
		for j := 0; j <= len2; j++ {
			if (i == 0) { // length of str1 is 0 (count deletions of string2)
				matrix[i][j] = j
			} else if (j == 0) { // length of str2 is 0 (count deletions of str1)
				matrix[i][j] = i
			} else if (str1[i - 1: i] == str2[j - 1: j]) {
				matrix[i][j] = matrix[i-1][j-1]
			} else {
				matrix[i][j] =  1 + int(math.Min(math.Min(float64(matrix[i - 1][j]), float64(matrix[i][j - 1])), float64(matrix[i - 1][j - 1])))
			}
		}
	}
	return matrix[len1][len2]
}

func main() {
	fmt.Print(editDistance("algorithmb", "logarithm"))
}