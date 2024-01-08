/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  let cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  const len1 = cleanStr1.length;
  const len2 = cleanStr2.length;

  if (len1 != len2) {
    return false;
  }

  cleanStr1 = cleanStr1.split("").sort().join("");
  cleanStr2 = cleanStr2.split("").sort().join("");

  for (let i = 0; i < len1; i++) {
    if (cleanStr1[i] != cleanStr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
