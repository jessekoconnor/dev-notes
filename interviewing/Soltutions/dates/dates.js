function getMonthYearUTCFromMillis(millis) {
    let date = new Date(millis);
    return date.getUTCMonth() + 1 + '/' + date.getUTCFullYear();
}

console.log(getMonthYearUTCFromMillis(1548805761859));