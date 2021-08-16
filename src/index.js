module.exports = function reverse (n) {
//  n = -n;
//  while(n>0) {
//      result = result * 10 + n % 10;
//       n = Math.floor(n / 10);
 let result = 0;
 let x = Math.abs(n)
          while(x) {
           result = result * 10 + x % 10;
           x = Math.floor(x / 10);
         }; 
 return result;
}
      
  
   
