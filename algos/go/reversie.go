package main

import (
	"fmt"
	"os"
	"bufio"
)

func reversie(input string) string {
	length := len([]rune(input))
	if (length <= 0) {
		return input
	}
	return input[length - 1: length] + reversie(input[0: length - 1])
}

func main() {
	fmt.Println("Print your word to reverse")
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')
	fmt.Println(reversie(text[0 : len([]rune(text)) - 1]))
}