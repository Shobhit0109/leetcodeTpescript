const input = process.stdin;
input.resume();
input.setEncoding('utf-8');

let inputStream = "";
let inputArray: string[] = [];
let inputIndex = 0;

input.on("data", data => inputStream+=data);
input.on("end", function() {
    inputArray = inputStream.split('\n');
    main();
})

function readLine() {
    // if (inputArray.length <= inputIndex)
    //     throw new Error("Input not found");
    return inputArray[inputIndex++];
} 
function main() {
    while(true) console.log(readLine());
}

