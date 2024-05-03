"use strict";
function longestPalindrome(s) {
    const table = Array.from({ length: s.length }, (_, i) => Array.from({ length: s.length }, (_, j) => (i == j ? true : false)));
    const longestPalIndex = [s.length - 1, s.length - 1];
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] != s[i + 1])
            continue;
        table[i][i + 1] = true;
        longestPalIndex[0] = i;
        longestPalIndex[1] = i + 1;
    }
    for (let i = s.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            table[i][j] = table[i][j] || (table[i + 1][j - 1] && s[i] === s[j]);
            if (table[i][j] &&
                j - i > longestPalIndex[1] - longestPalIndex[0]) {
                longestPalIndex[0] = i;
                longestPalIndex[1] = j;
            }
        }
    }
    return s.slice(longestPalIndex[0], longestPalIndex[1] + 1);
}
console.log(longestPalindrome('babad'));
//# sourceMappingURL=2th.js.map