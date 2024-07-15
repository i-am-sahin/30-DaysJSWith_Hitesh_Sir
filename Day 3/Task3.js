let largest;
let a = 101;
let b = 121;
let c =70

if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}
console.log("Largest number is: " + largest);