function calculateArea(length, width){

if(length <=0){
    throw new RangeError("length should be a positive number")
}

if(width <=0){
    throw new RangeError("width should be a positive number")
}
   const area = length * width;
   console.log("Area Of a Rectangle is", area)
}
calculateArea(5, 5)
calculateArea(50, 100)
// calculateArea(-50, 100)
calculateArea(50, -100)
