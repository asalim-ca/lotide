const letterPositions = function(sentence) {
  const results = {};
  let char = '';
  for (let index = 0; index < sentence.length; index++) {
    char = sentence.charAt(index);
    if (char !== ' ') { //Would be cleaner with regex.
      if (results[char]) results[char].push(index);
      else results[char] = [index];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));