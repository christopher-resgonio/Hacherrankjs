function extraLongFactorials(n) {
    let result = BigInt(1); 
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i); 
    }
    console.log(result.toString()); // Convert to string to avoid scientific notation
}
