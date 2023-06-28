function reversefactorial(number){
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
let number = 6;
let result = reversefactorial(number);
console.log('Your factorial of',number,':',result);