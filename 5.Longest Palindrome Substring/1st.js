"use strict";
function longestPalindrome1(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        const testList = Array(s.length - i);
        for (let j = i; j < s.length; j++) {
            testList[j - i] = s[j];
            console.log(j, i, testList);
            if (!checkPal(testList, j - i + 1))
                continue;
            if (longest.length < j - i + 1) {
                longest = testList.slice(0, j - i + 1).join('');
            }
        }
    }
    return longest;
}
function checkPal(testList, listSize) {
    for (let i = 0; i < listSize / 2; i++) {
        if (testList[i] != testList[listSize - i - 1])
            return false;
    }
    return true;
}
