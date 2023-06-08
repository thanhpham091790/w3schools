
/* Return a random number between min(included) and max(excluded) */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Return a random number between min(included) and max(included) */
function getRandomInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}