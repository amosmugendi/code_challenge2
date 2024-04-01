/*function declartion that takes two numbers as parameters */
function arraygen(num1,num2){
    let nums=[] //deefine the array

    for (let i= num1; i <= num2; i++){
        nums.push(i);
    }
    return nums;
    // console.log(nums)
}
arraygen(0,5)
