function getTotalX(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = (x, y) => (x * y) / gcd(x, y);

    let lcmA = a.reduce((acc, val) => lcm(acc, val));
    let gcdB = b.reduce((acc, val) => gcd(acc, val));

    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) count++;
    }
    return count;
}