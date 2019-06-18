function leastToGreatest(arr) {
    arr.sort((a,b) => a -b)
    return arr
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 


function greatestToSmallest(arr) {
    arr.sort((a,b) => b-a)
    return arr
  }
  console.log(greatestToSmallest([200,500,78,66,3,2,5,92,8]))