function matchingStrings(strings, queries) {
  let freq = {};
  queries.forEach((query) => (freq[query] = 0));
  strings.forEach((string) => (freq[string] = 0));

  for (let string of strings) {
    freq[string]++;
  }
  return queries.map((query) => freq[query]);
}
