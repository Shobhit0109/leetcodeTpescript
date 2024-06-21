function func1() {
    const arr = [];
    for(let i=0; i<times; i++) arr.push('text');
    return arr.join('');
}
function func2() {
    let str = "";
    for(let i=0; i<times; i++) str += 'text';
    return str; 
}
function func3() {
    return "text".repeat(times);
}
function func4() {
    return Array(times).fill('text').join('');
}
function func5() {
    return Array.from(Array(times), ()=>'text').join('');
}
function func6() {
    return Array.from({'length' : times}, ()=>'text').join('');
}

const times = 10**8;
const functions = [func1, func2, func3, func4, func5, func6];
for(const func of functions) {
    console.time();
    func();
    console.timeEnd();
}
