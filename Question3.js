let arr=[1,2,3,4,5,6,7,8,9]//example of an array to be passed in our function
//write a function to check for prime numbers in our array
function genPrime(num){
    if(num <=1) return false;
    for(let i=2; i<= Math.sqrt(num);i++){
        if (num%i ===0) return false;
    }
    return true
}
//funciton that filters all the prime numbers in the array.
function filterPrimes(primes){
    return primes.filter(num=> genPrime(num));
}
// console.log(filterPrimes(arr))
