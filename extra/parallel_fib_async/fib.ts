function fiboNormal(n: number): number {
  if (n === 0 || n === 1) return n;
  return fiboNormal(n - 1) + fiboNormal(n - 2);
}

async function fibo1(n: number): Promise<number> {
  if (n === 0 || n === 1) return n;
  const f1 = await fibo1(n - 1);
  const f2 = await fibo1(n - 2);
  return f1 + f2;
}

async function fibo2(n: number): Promise<number> {
  if (n === 0 || n === 1) return n;
  const [f1, f2] = await Promise.all([fibo2(n - 1), fibo2(n - 2)]);
  return f1 + f2;
}

async function go(n: number = 20) {
  console.time("fibo1");
  await fibo1(n);
  console.timeEnd("fibo1");

  console.time("fibo2");
  await fibo2(n);
  console.timeEnd("fibo2");

  console.time("fiboNormal");
  fiboNormal(n);
  console.timeEnd("fiboNormal");

  const fibo = (n: number): number => +(n < 2 || fibo(n - 1) + fibo(n - 2));

  console.time("fibo");
  fibo(n);
  console.timeEnd("fibo");

  // iteration
  const fiboIter = (n: number): number => {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
      [a, b] = [b, a + b];
    }
    return a;
  };

  console.time("fiboIter");
  fiboIter(n);
  console.timeEnd("fiboIter");

  process.exit();
}

console.clear();

//  take input from user in node
const input = process.stdin;
input.setEncoding("utf-8");

console.log("Enter number to calculate fibonacci: ");
input.on("data", (data) => {
  const n = parseInt(data + "");
  if (isNaN(n)) {
    console.log("Please enter a valid number");
    return;
  }
  go(n).then(() => console.log("done"));
});
