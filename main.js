window.addEventListener("DOMContentLoaded", init);
function init(){
    console.log("initialized");
    increment();
}
const myArray = [0, 1, 2, 3]
let counter;
let x;
/* if (myArray.length<=9){
myArray.push('whatever')
console.log(myArray);
console.log(myArray.length)
} */

counter = myArray.length;
	function increment() {
        x=myArray.length+1;
        if (counter<=9){counter++;}
        else if(counter>9){
            myStopFunction();}
        console.log(counter);
        myArray.push(x);
        document.querySelector("h1.arr").textContent=myArray;
        document.querySelector("h1.output").textContent=myArray.length;
console.log(myArray);
console.log(myArray.length)

		
	}
    setInterval('increment()', 1000);
    
    function myStopFunction() {
        myArray.shift(myArray[0]);
      }