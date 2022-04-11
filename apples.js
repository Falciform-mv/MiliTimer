const a = 4;
const s = 7;
const t = 10;
const b = 12;
const apples = [2, 3, -4];
const oranges = [-3, 2];
let appleCount = 0;


let countApplesandOranges = function(a, s, t, b, apples, oranges) {
  console.log("this is within the function")
  
  for (i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount ++;
      console.log('this is apple count ' + appleCount)

    }
  }


}


const finalAnswer = countApplesandOranges(4, 7, 10, 12, apples, oranges);

console.log(finalAnswer)