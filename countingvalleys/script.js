function countingValleys(steps, path) {
    let valleys = 0;
    let level = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') level++;
        else level--;
        if (level === 0 && path[i] === 'U') valleys++;
    }
    return valleys;
}