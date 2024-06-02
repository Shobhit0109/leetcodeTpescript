'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string[] | string = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    (inputString as string) += inputStdin;
});

process.stdin.on('end', function () {
    inputString = (inputString as string).split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map((arTemp) => parseInt(arTemp, 10));

    console.log(ar);
    // const result = simpleArraySum(ar);

    // ws.write(result + '\n');

    ws.end();
}
