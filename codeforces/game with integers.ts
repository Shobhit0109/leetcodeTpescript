'use strict';

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

function main() {
    let testcases = parseInt(readLine().trim(), 10);

    while (testcases--) {
        const n = parseInt(readLine().trim(), 10);
        console.log(solve(n) ? 'First' : 'Second');
    }
}
function solve(n: number): boolean {
    return (n - 1) % 3 === 0 || (n + 1) % 3 === 0;
}
