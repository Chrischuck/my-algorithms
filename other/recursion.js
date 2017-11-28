const countChar = function(string, char) {
    if (string.length === 0) {
        return 0
    }
    const c = string.shift()
    if (c === char) {
        return countChar(string, char) + 1
    }
    return countChar(string, char)
}

const string = ['a','b','c','d','c','d','c'] // 3 c's
console.log(countChar(string, 'c'))

const subsetSum = function(array, target) {
    if (array.length === 0) {
        return target === 0
    }
    const newArray = array.map(a => a)
    const val = newArray.shift()
    const withoutVal = subsetSum(newArray, target)
    const withVal = subsetSum(newArray, target - val)
    return withoutVal || withVal
}

const subsetSumArray = [3, 5, 7]
console.log(subsetSum(subsetSumArray, 9))

const oddSubsetSum = function(array, target) {
    if (array.length === 0) {
        return target === 0
    }

    const newArray = array.map(a => a)
    const val = newArray.shift()
    if (val % 2 === 0) {
        return oddSubsetSum(newArray, target)
    }
    const withoutVal = oddSubsetSum(newArray, target)
    const withVal = oddSubsetSum(newArray, target - val)
    return withoutVal || withVal
}

const oddSubsetSumArray = [2, 5, 4, 7, 3, 1]
console.log(oddSubsetSum(oddSubsetSumArray, 11))

const cleanHotelInZigZag = function(lo, hi) {
    if (hi <= lo) {
        return
    }
    const difference = hi - lo
    if (difference % 2 == 0) {
        console.log(`cleaning lo at ${lo}`)
        cleanHotelInZigZag(lo + 1, hi)
    } else {
        console.log(`cleaning hi at ${hi}`)
        cleanHotelInZigZag(lo, hi - 1)
    }
}

cleanHotelInZigZag(1, 10)