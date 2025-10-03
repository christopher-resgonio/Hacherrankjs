function bonAppetit(bill, k, b) {
    // Calculate Anna's share (excluding item k)
    const actual = (bill.reduce((acc, val, idx) => acc + (idx !== k ? val : 0), 0)) / 2;
    if (b === actual) {
        console.log("Bon Appetit");
    } else {
        console.log(b - actual);
    }
}