module.exports = function toReadable (number) {
  let wordArray0 = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let wordArrayException = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
     'seventeen', 'eighteen', 'nineteen'];
  let wordArray1 = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
     'ninety'];
  let wordArray2 = [];

  wordArray2[0] = '';
  for (let i = 1; i < 10; i++) {
    wordArray2[i] = wordArray0[i] + 'hundred';
  }
  
  arrWord = [wordArray0, wordArray1, wordArray2];

  let ordinalNum = [];
  let newWord = '';
  let index;
 
   // find exception from 10 to 19
  function caseException11 (n) {
    return ((n % 100 > 9) && (n % 100 < 20)) ? true : false;
  }

  let j = 0;
  let a = n;
  while (a >= 1) {
    newWord = arrWord[j][a % 10] + newWord;
    j++;
    a = Math.floor(a / 10);
  }


  newWord = [n % 10] + newWord;
  newWord = wordArray1[Math.floor(n / 100)] + wordArray4[0] + newWord;






}
