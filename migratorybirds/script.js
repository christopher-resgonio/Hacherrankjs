function migratoryBirds(arr) {
    const freq = {};
    for (const bird of arr) {
        freq[bird] = (freq[bird] || 0) + 1;
    }
    let maxCount = 0;
    let minType = Infinity;
    for (const type in freq) {
        const count = freq[type];
        if (count > maxCount || (count === maxCount && type < minType)) {
            maxCount = count;
            minType = Number(type);
        }
    }
    return minType;
}