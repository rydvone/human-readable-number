module.exports = function toReadable (number) {
  let wordArray0 = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    ' nine'];
  let wordArrayException = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let wordArray1 = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
    ' eighty', ' ninety'];
  let wordArray2 = [];
  wordArray2[0] = '';
  for (let i = 1; i < 10; i++) {
    wordArray2[i] = wordArray0[i] + ' hundred';
  }
  arrWord = [wordArray0, wordArray1, wordArray2];

  let newWord = '';

  if (number == 0) {
    return 'zero';
  }

  // find exception from 10 to 19
  function caseException11(number) {
    return ((number % 100 > 9) && (number % 100 < 20)) ? true : false;
  }

  let j = 0;
  let a = number;
  while (a >= 1) {
    if (caseException11(number) && j == 0) {
      newWord = wordArrayException[(a % 100) - 10];
      a = Math.floor(a / 100);
      j = 1;
    } else {
      console.log(j);
      newWord = arrWord[j][a % 10] + ' ' + newWord;
      a = Math.floor(a / 10);
    }
    j++;

  }
  return newWord.trim();
}
