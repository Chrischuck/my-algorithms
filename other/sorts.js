//////// Create Array //////
const size = 10 //Math.ceil(Math.random() * 22)
const array = []

for (let i = 0; i <= size; i++) {
    array.push(Math.ceil(Math.random() * 20))
}

////////  Quick Sort //////

const quicksort = function(array) {
     quicksortHelper(array, 0, array.length)
}
const quicksortHelper = function(array, i, j) {
    if (j - i <= 2) {
        return
    }

    const middleIndex = partition(array, i, j)
    quicksortHelper(array, 0, middleIndex)
    quicksortHelper(array, middleIndex + 1, array.length)

}
const partition = function(array, i, j) {
    const pivot = array[i]
    let k = i + 1
    let l = j - 1

    while (k <= l) {
        if (array[k] < pivot) {
            k += 1
        } else if (array[l] >= pivot) {
            l -= 1
        } else {
            swap(array, k, l)
            l -= 1
            k += 1
        }
    }

    swap(array, i, k - 1)
    return k - 1
}
const swap = function(array, k, l) {
    let temp = array[k]
    array[k] = array[l]
    array[l] = temp
}
//////// Quick Sort //////

const quicksort2 = function(array) {
    if (array.length < 2) {
        return array
    }
    const middleValue = array[Math.floor(array.length / 2)]
    const leftHalf = []
    const rightHalf = []
    const middleHalf = []
    array.forEach(i => {
        if (i < middleValue) {
            leftHalf.push(i)
        } else if (i > middleValue) {
            rightHalf.push(i)
        } else {
            middleHalf.push(i)
        }
    })
    return quicksort(leftHalf).concat(middleHalf).concat(quicksort(rightHalf))
 }


//////// Merge Sort //////

const mergesort = function(array) {
    if (array.length <= 1) {
        return array
    }
    const rightHalf = mergesort(array.splice(0, array.length / 2))
    const leftHalf = mergesort(array)
    const merged = []

    let i = 0;
    let j = 0;
    while (i < rightHalf.length && j < leftHalf.length) {
        if (rightHalf[i] <= leftHalf[j]) {
            merged.push(rightHalf[i])
            i += 1
        } else {
           merged.push(leftHalf[j])
           j += 1 
        }
    }
    if (i < rightHalf.length) {
        while (i < rightHalf.length) {
            merged.push(rightHalf[i])
            i += 1
        }
    }
    if (j < leftHalf.length) {
        while (j < leftHalf.length) {
            merged.push(leftHalf[j])
            j += 1
        }
    }
    return merged
}
const array2 = [1,5,3,4]
console.log(array2)
quicksort(array2)
console.log(array2)