

/* Convert Decimal to Binary */
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

/* Convert Binary to Decimal */
function binaryToDecimal(binary) {
    return parseInt(binary, 2).toString(10);
}