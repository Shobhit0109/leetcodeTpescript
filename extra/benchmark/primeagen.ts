function leftpad (str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}

function mine_array(str, len, ch) { // slowest
const temp = [];
  for (let i=0;i < len - str.length; i++) {
    temp.push(ch);
  }
  temp.push(str);
  return temp.join('');
}

function mine(str, len, ch = ' ') { // fastest
  for (let i=0;i < len - str.length; i++) {
    str = ch + str;
  }
  return str;
}

function run(fn, count, ...args) {
    const start = performance.now();
    for(let i=0; i<count; i++) {
        fn.apply(null, args);
    }
    return performance.now() - start;
}

[10, 100, 1000, 10000].forEach(x=>{
    [10, 100, 1000, 10000].forEach(y=>{
        console.log("mine", x, y, run(mine, x, 'foo', y));
    });
    [10, 100, 1000, 10000].forEach(y=>{
                console.log("leftpad", x, y, run(leftpad, x, 'foo', y));
    })
})
