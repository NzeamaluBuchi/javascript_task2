let Interest;
let data = [
            {principal:2500, time:1.8},
            {principal:1000, time:5},
            {principal:3000, time:1},
            {principal:2000, time:3}
            ]

 function interestCalculator (principal,time){
     
    if(principal >= 2500 && time > 1 && time  < 3) {
        rate = 3;
    } else if (principal >= 2500 && time >= 3) {
        rate = 4;
    } else if (principal < 2500 || time <= 1) {
        rate = 2;
    } else {
    rate = 1;
}
    return rate;
  } 
 
 
const interestData = []

for (i=0; i < data.length; i++) {
   
    Interest = (data[i].principal * data[i].time * interestCalculator(3500,10))/100;
    console.log(Interest)
    
    interestData.push({interest:Interest, principal:data[i].principal, time:data[i].time, rate:interestCalculator(3500,10)});
} 

 console.log(interestData);