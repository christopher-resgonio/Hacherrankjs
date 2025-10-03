function timeConversion(s) {
    let [hh, mm, ss] = s.slice(0, 8).split(':');
    const period = s.slice(8);

    hh = parseInt(hh, 10);

    if (period === 'AM') {
        if (hh === 12) hh = 0;
    } else { // PM
        if (hh !== 12) hh += 12;
    }

    return `${hh.toString().padStart(2, '0')}:${mm}:${ss}`;
}