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

    const _arCount = parseInt(readLine().trim(), 10);

    const _ar = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map((arTemp) => parseInt(arTemp, 10));

}
