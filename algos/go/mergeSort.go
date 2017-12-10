package main

import "fmt"

func mergeSort(array []int) []int {
	length := len(array)
	if (length <= 1) {
		return array
	}

	var sorted []int
	left := mergeSort(array[0 : (length / 2)])
	right := mergeSort(array[length/2 : length])
	leftCounter, rightCounter := 0, 0

	for leftCounter < len(left) && rightCounter < len(right) {
		if (left[leftCounter] <= right[rightCounter]) {
			sorted = append(sorted, left[leftCounter])
			leftCounter += 1
		} else {
			sorted = append(sorted, right[rightCounter])
			rightCounter += 1
		}
	}

	if (leftCounter < len(left)) {
		for leftCounter < len(left) {
			sorted = append(sorted, left[leftCounter])
			leftCounter += 1
		}
	}
	if (rightCounter < len(right)) {
		for rightCounter < len(right) {
			sorted = append(sorted, right[rightCounter])
			rightCounter += 1
		}
	}
	return sorted
}

func main() {
	array := []int{7,3,6,4,1}
	fmt.Println(mergeSort(array))
}