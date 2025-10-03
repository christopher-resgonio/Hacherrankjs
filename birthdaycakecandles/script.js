function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    return candles.filter(candle => candle === max).length;
}