function leftpad(str: string, len: number, ch: string | number): string {
  str = String(str);
  let i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}

function mine_array(str: string, len: number, ch: string | number): string { // slowest
  const temp: Array<string | number> = [];
  for (let i = 0; i < len - str.length; i++) {
    temp.push(ch);
  }
  temp.push(str);
  return temp.join('');
}

function mine(str: string, len: number, ch: string = ' '): string { // fastest
  for (let i = 0; i < len - str.length; i++) {
    str = ch + str;
  }
  return str;
}

function fastest(str: string, len: number, ch: string | number = ' '): string {
  return ch.toString().repeat(len - str.length) + str;
}
function primeagen(str: string, len: number, ch: string | number = ' '): string { 
  return Array(len - str.length).fill(ch).join('') + str;
}
function run(fn: Function, count: number, ...args: any[]): number {
  const start = performance.now();
  for (let i = 0; i < count; i++) {
    fn(...args);
  }
  return performance.now() - start;
}

// only run for 10000
const x = 10000;
const y = 10000;
console.log("mine", x, y, run(mine, x, 'foo', y));
console.log("leftpad", x, y, run(leftpad, x, 'foo', y));
console.log("mine_array", x, y, run(mine_array, x, 'foo', y));
console.log("fastest", x, y, run(fastest, x, 'foo', y));
console.log("primeagen", x, y, run(primeagen, x, 'foo', y));


// [10, 100, 1000, 10000].forEach(x => {
//   [10, 100, 1000, 10000].forEach(y => {
//     console.log("mine", x, y, run(mine, x, 'foo', y));
//   });
//   [10, 100, 1000, 10000].forEach(y => {
//     console.log("leftpad", x, y, run(leftpad, x, 'foo', y));
//   });
//   [10, 100, 1000, 10000].forEach(y => {
//     console.log("mine_array", x, y, run(mine_array, x, 'foo', y));
//   });
//   [10, 100, 1000, 10000].forEach(y => {
//     console.log("fastest", x, y, run(fastest, x, 'foo', y));
//   });
//   [10, 100, 1000, 10000].forEach(y => {
//     console.log("primeagen", x, y, run(primeagen, x, 'foo', y));
//   });
// });
