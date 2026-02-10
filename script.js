const input = "5 12 18 30 1";

const result = input
    .split(' ')
    .map(Number)
    .filter(n => n > 10)
    .join(' ');

console.log(result);