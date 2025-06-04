

function CheckIfEvenOrOdd(a){
   const remainder = a % 2;

   if(remainder === 0){
    return "Even";
   }
   else {
    return "Odd";
   }
}

console.log("51 is", CheckIfEvenOrOdd(51));
console.log("50 is ", CheckIfEvenOrOdd(50));
console.log("-51 is", CheckIfEvenOrOdd(-51));
console.log("0 is", CheckIfEvenOrOdd(0));


console.log(" CheckIfEvenOrOdd2 start");


function CheckIfEvenOrOdd2(a){
    return a % 2 === 0 ? "Even" : "Odd";
}

 console.log("51 is", CheckIfEvenOrOdd2(51));
console.log("50 is ", CheckIfEvenOrOdd2(50));
console.log("-51 is", CheckIfEvenOrOdd2(-51));
console.log("0 is", CheckIfEvenOrOdd2(0));
