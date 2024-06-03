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
        console.log(halloumiBoxes() ? 'YES' : 'NO');
    }
}

function halloumiBoxes(): boolean {
    const [_, k] = readline().split(' ').map(Number);
    const a: number[] = readline().split(' ').map(Number);
    if(k === 1) {
        const sorted = a.slice().sort((a, b) => a - b);
        return !sorted.some((v, i) => v !== a[i]);
    }
    return true;
}