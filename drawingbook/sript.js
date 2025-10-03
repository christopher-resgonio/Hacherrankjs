function pageCount(n, p) {
    const front = Math.floor(p / 2);
    const back = Math.floor(n / 2) - Math.floor(p / 2);
    return Math.min(front, back);
}