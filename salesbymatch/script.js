function sockMerchant(n, ar) {
    const freq = {};
    let pairs = 0;
    for (const sock of ar) {
        freq[sock] = (freq[sock] || 0) + 1;
        if (freq[sock] % 2 === 0) pairs++;
    }
    return pairs;
}