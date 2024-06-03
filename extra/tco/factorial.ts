const trampoline = (fn: trampolineArg): trampolineArg => {
    while (typeof fn === 'function') {
        fn = fn();
    }
    return fn;
};

const factorialHelper = (x: bigint, accumulator: bigint) => {
  if (x === 1n || x === 0n) {
    return accumulator;
  }
  return () => factorialHelper(x - 1n, x * accumulator);
};
type trampolineArg = ReturnType<typeof factorialHelper>;

const factorial = (n: bigint) => trampoline(factorialHelper(n, 1n));


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

    const num = parseInt(readLine().trim(), 10);

    const result = factorial(BigInt(num));

    console.log(result.toString());
}
