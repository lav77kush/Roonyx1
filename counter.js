// Solution 2 : counter function  
 
 function counter(value=0) {
    let initial=value;

    function getInitialValue(){
        return  initial;
    }
    function getNextValue(){
        return  initial=initial+1;
    }  
   return [getInitialValue, getNextValue] 
}


const [getA, nextA] = counter(1);
console.log(getA());
nextA();
console.log(getA()); 
const [getB, nextB] = counter(10);
nextB(); 
console.log(getA());
console.log(getB()); 
nextA();
console.log(getA()); 
console.log(getB());
