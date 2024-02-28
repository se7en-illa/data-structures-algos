const findRepeatedDnaSequences = function (s) {
  const substrings = new Set();
  const visited = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    let dna = s.substring(i, i + 10);
    if (visited.has(dna)) substrings.add(dna);

    visited.add(dna);
  }

  return Array.from(substrings);
};

function findRepeatedDnaSequences(s) {
  const visited = {};
  const results = [];
  for (let i = 0; i < s.length - 9; i++) {
    const sequence = s.substring(i, i + 10);
    if (visited[sequence] !== undefined) {
      if (!visited[sequence]) {
        visited[sequence] = true;
        results.push(sequence);
      }
    } else {
      visited[sequence] = false;
    }
  }
  return results;
}
