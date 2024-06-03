'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string| string[] = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    (inputString  as string) += inputStdin;
});

process.stdin.on('end', () => {
    inputString = (inputString as string)
        .trim()
        .split('\n')
        .map((string) => {
            return string.trim();
        });
    main();
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

function main() {
    const t: number = parseInt(readline(), 10);
    for (let i = 0; i < t; i++) {
        helper();
    }
}

function helper() {
    let num = parseInt(readline(), 10);
    const a: number[] = [];
    while(num) {
        const temp = num & 1;
        if(temp === 0) {
            a.push(0);
            num >>= 1;
            continue;
            }
        if((num >> 1) & 1) { a.push(-1);num++;} else {a.push(1);num--;}
        num >>= 1;
        
    }
    console.log(a.length);
    console.log(a.join(' '));
}
