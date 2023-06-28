// if you want to check the number is even or odd by using javascript:
function EvenOrOdd(number){
    const Oparation = number % 2;
    if (Oparation === 0) {
        console.log(number + " is even");
        return "even";
    }
    else{
        console.log(number + " is odd");
        return "odd";
    }
}
EvenOrOdd(100);
