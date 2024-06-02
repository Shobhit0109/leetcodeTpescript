function longestPalindrome3(s: string): string {
    let longestStart: number = 0,
        longestEnd: number = 0;

    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (right - left - 2 > longestEnd - longestStart) {
            longestEnd = right - 1;
            longestStart = left + 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        // expand around center for odd-length palindromes
        expandAroundCenter(i - 1, i + 1);

        // expand around center for even-length palindromes
        expandAroundCenter(i, i);
    }
    return s.slice(longestStart, longestEnd + 1);
}

console.log(longestPalindrome3('babad'));
console.log(longestPalindrome3('cbbd'));
console.log(longestPalindrome3('a'));
console.log(longestPalindrome3('ac'));
console.log(longestPalindrome3('aaaaa'));
