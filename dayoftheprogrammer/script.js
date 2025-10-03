if (year === 1918) {
        // Transition year in Russia: February had only 15 days
        return "26.09.1918";
    } else if (
        (year < 1918 && year % 4 === 0) || // Julian leap year
        (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) // Gregorian leap year
    ) {
        return `12.09.${year}`;
    } else {
        return `13.09.${year}`;
    }