//  Given a set of items, each with a weight and a value,
//  determine the number of each item to include in a collection
//  so that the total weight is less than or equal to a given limit 
//  and the total value is as large as possible.
//  It derives its name from the problem faced by someone who is constrained
//  by a fixed-size knapsack and must fill it with the most valuable items.

const knapsackDp = function(weights, dollarAmounts, maxWeight) {
  const knapsack = []
  for (let i = 0; i <= weights.length; i++ ) {
      let array = []
      for (let j = 0; j <= maxWeight; j++) {
          array.push(0)
      }
      knapsack.push(array)
  }

  for (let i = 1; i <= dollarAmounts.length; i++) {
      for (let j = 0; j <= maxWeight; j++) {
          if (weights[i-1] <= j) { //if we can even subtract
              knapsack[i][j] =
                  knapsack[i - 1][j] > knapsack[i-1][j - weights[i-1]] + dollarAmounts[i-1] ? // Check if previous value is bigger 
                  knapsack[i - 1][j] : // if it is go with previous
                  knapsack[i-1][j - weights[i-1]] + dollarAmounts[i-1] // if not go with new vale
                  // new value is current weight (j) - the last weight added (weigts[i-1]) + the new value
                  // [i-1] puts you up a row
          } else {
              knapsack[i][j] = knapsack[i - 1][j] // use value directly above
          }
      }
  }
  return knapsack[weights.length][maxWeight]
}

const knapsackRec = function(weights, dollarAmounts, maxWeight) {
  if (weights.length === 0) {
      return 0
  }
  
  const arr1 = weights.map(a => a)
  const arr2 = dollarAmounts.map(a => a)

  const weight = arr1.shift()
  const dollar = arr2.shift()
  const withoutWeight = knapsackRec(arr1, arr2, maxWeight)

  if (maxWeight - weight >= 0) {
      const withWeight = knapsackRec(arr1, arr2, maxWeight - weight) + dollar
      return withWeight > withoutWeight ? withWeight : withoutWeight
  }
  return withoutWeight
}

console.log(knapsackDp([1, 2, 3], [5, 10, 12], 5))
console.log(knapsackRec([1, 2, 3], [5, 10, 12], 5))
