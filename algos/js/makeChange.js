// Given an array of values, what is the minimal amount of coins to make a certain value

const makeChange = function(array, value) {
  const c = []
  for (let v = 0; v <= value; v++) {
      c[v] = v
      array.forEach(d => {
          if (d <= v && c[v] > c[v - d] + 1) {
              c[v] = c[v - d] + 1
          }
      })
  }
  return c[value]
}

console.log(makeChange([1,5,15,20], 30))