/*function declartion that takes two numbers as parameters */
function arraygen(num1,num2){
    let nums=[] //deefine the array
//use a loop to generate the numbers that start from the first number to the last number
    for (let i= num1; i <= num2; i++){
        nums.push(i);//push the created numbers using the array method push 
    }
    return nums;
    // console.log(nums)
}
arraygen(0,5)
