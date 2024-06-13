/**
 * Calculates the nth Fibonacci number using recursion with async/await.
 *
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @return {Promise<number>} A promise that resolves to the nth Fibonacci number.
 */
async function fibo1(n: number): Promise<number> {
  if (n === 0 || n === 1) return n;
  const f1 = await fibo1(n - 1);
  const f2 = await fibo1(n - 2);
  return f1 + f2;
}
// write normal fibonaci function
function fibo(n: number): number {
  if (n === 0 || n === 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

async function fibo2(n: number): Promise<number> {
  if (n === 0 || n === 1) return n;
  const [f1, f2] = await Promise.all([fibo2(n - 1), fibo2(n - 2)]);
  return f1 + f2;
}

async function go() {
  const n = 30;

  console.time("fibo1");
  await fibo1(n);
  console.timeEnd("fibo1");

  console.time("fibo2");
  await fibo2(n);
  console.timeEnd("fibo2");
}

console.clear();
go();

// try to compare the time between normal and async fibonacci
console.time("fibo");
fibo(30);
console.timeEnd("fibo");