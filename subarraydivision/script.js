function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        const sum = s.slice(i, i + m).reduce((acc, val) => acc + val, 0);
        if (sum === d) count++;
    }
    return count;
}