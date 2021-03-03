/*
The roll function is used to generate random values between a range of values
Math.random() => r 
where 0 <= r <= 1

o<= (n-min)/(max-min) <1
 r = (n-min)/(max-min)
 n = r* (max-min) + min

*/

function roll(min,max,floatFlag){
    let r= Math.random() * (max-min) + min
    return floatFlag? r :Math.floor(r);
}

console.log(roll(1,5));