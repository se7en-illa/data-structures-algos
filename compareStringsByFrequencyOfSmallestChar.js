function f(s) {
  let smallestChar = s[0];
  let freq = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] < smallestChar) {
      smallestChar = s[i];
      freq = 1;
    } else if (s[i] === smallestChar) {
      freq++;
    }
  }
  return freq;
}

var numSmallerByFrequency = function (queries, words) {
  const wordFreqs = words.map(f);
  const queryFreqs = queries.map(f);
  return queryFreqs.map(
    (queryFreq) => wordFreqs.filter((wordFreq) => queryFreq < wordFreq).length
  );
};

var numSmallerByFrequency = function(queries, words) {
    const smallestLexicographicalFrequency = (s) => {
      let smallest;
      let frequency;
  
      for (const c of s) {
        if (!smallest || c < smallest) {
          smallest = c;
          frequency = 1;
        } else if (c === smallest) {
          frequency++;
        }
      }
  
      return frequency;
    }
  
    const frequencies = words.map(smallestLexicographicalFrequency)
    const cache = new Map();
  
    const results = queries.map(s=>{
      const currFreq = smallestLexicographicalFrequency(s);
      if (!cache.has(currFreq)) {
        cache.set(
          currFreq,
          frequencies.reduce((count, freq) => currFreq < freq ? count+1 : count, 0)
        );
      } 
  
      return cache.get(currFreq);
    });
  
    return results;
  };