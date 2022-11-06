'use strict'

/*let candies = true; 
let i = 0;

while (candies) {
   i = Math.random();
   
   console.log(i);

   if (i > 0.5){
    candies = false
   }
}*/

do {
    
        i = Math.random();
        console.log(i);
     
        if (i > 0.5){
         candies = false;
        } else {
          candies = true;
        }
} while (candies);