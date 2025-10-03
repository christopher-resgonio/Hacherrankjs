function miniMaxSum(arr) {
   
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((acc, val) => acc + val, 0);
    const maxSum = arr.slice(1, 5).reduce((acc, val) => acc + val, 0);
    console.log(minSum + " " + maxSum);
}