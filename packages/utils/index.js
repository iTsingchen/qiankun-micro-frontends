/**
 * Simple string to unsigned short integer hash function, range [5000, 65000)
 *
 * Some result
 *   tags: 25443, comments: 53094, login: 30727
 *
 * !DOES NOT guarantee uniqueness!! There might be conflict, but so far so good
 *
 * @param {string} slug - It can usually be package name.
 * @returns {number}
 */
const slugToPort = (slug) => {
  const charDiff = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);
  return (
    ([...slug].reduce((o, c, i) => o + charDiff(c, "a") * Math.pow(26, i), 0) %
      60000) +
    5000
  );
};

module.exports = { slugToPort };
