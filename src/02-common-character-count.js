/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let minArray;
  let maxArray;
  if (s1.length > s2.length) {
    maxArray = s1.split('');
    minArray = s2.split('');
  } else {
    maxArray = s2.split('');
    minArray = s1.split('');
  }
  for (let i = 0; i < minArray.length; i++) {
    if (maxArray.includes(minArray[i])) {
      maxArray[maxArray.indexOf(minArray[i])] = '';
      res++;
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
