module.exports = function toReadable (number) {
  let wordArray = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety];
  
  let ordinalNum = [];
  let index;

   // find exception from 0 to 19
   function caseException11 (n) {
    return ((n % 100 > 9) && (n % 100 < 20)) ? true : false;
  }

  // // find 10, 20, ... 90
  // function caseException10 (n) {
  //   return ((n % 100 > 9) && (n % 10 == 0)) ? true : false;
  // }


  // let numFindEqualWord;
  for (let i = 0; true ; i++) {
    switch (ordinalNum[i]) {
      case 1 :
        wordNum[i] = 'one';
        break;
      case 2 :
        wordNum[i] = 'two';
        break;          
      case 3 :
        wordNum[i] = 'three';
        break;  
    }

  }
}
