function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesOnHouse = apples.filter(d => a + d >= s && a + d <= t).length;
    const orangesOnHouse = oranges.filter(d => b + d >= s && b + d <= t).length;
    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}