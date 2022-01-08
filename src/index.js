module.exports = function toReadable (number) {
  let wordArray = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
     thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, 
     twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety];
  
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

  function numDecomposition (n, index) {
    let a = n;
    while (a >= 1) {
      ordinalNum[index] = a % 10;
      a = Math.floor(a / 10);
      index++;
    }
  }
  if (caseException11(n)) {
    ordinalNum[0] = n % 100;
    numDecomposition(Math.floor(n % 100), 1);
  } else {
    numDecomposition(n, 0);
  }

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
