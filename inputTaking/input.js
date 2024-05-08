"use strict";
const input = process.stdin;
input.resume();
input.setEncoding('utf-8');
let inputStream = "";
let inputArray = [];
let inputIndex = 0;
input.on("data", data => inputStream += data);
input.on("end", function () {
    inputArray = inputStream.split('\n');
    main();
});
function readLine() {
    return inputArray[inputIndex++];
}
function main() {
    while (true)
        console.log(readLine());
}
