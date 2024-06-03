'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let currentLine: number = 0;
let input: string[] = [];

process.stdin.on('data', function (inputStdin: Buffer): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    input = inputString.split('\n');

    main();
});

function readLine(): string {
    return input[currentLine++];
}

function simpleArraySum(ar) {
    // Write your code here
    return;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map((arTemp) => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
