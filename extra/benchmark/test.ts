const benchmarkMap = (size: number) => {
    console.time('benchmarkMap');
    let map = new Map();
    for (let i = 0; i < size; i++) map.set(i, i);
    for (let i = 0; i < size; i++) {
        let x = map.get(i);
    }
    console.timeEnd('benchmarkMap');
};

const benchmarkObj = (size: number) => {
    console.time('benchmarkObj');
    let obj: Record<number, number> = {};
    for (let i = 0; i < size; i++) obj[i] = i;
    for (let i = 0; i < size; i++) {
        let x = obj[i];
    }
    console.timeEnd('benchmarkObj');
};

const benchmarkMapStr = (size: number) => {
    console.time('benchmarkMapStr');
    let map = new Map();
    for (let i = 0; i < size; i++) map.set(i.toString(), i);
    for (let i = 0; i < size; i++) {
        let x = map.get(i.toString());
    }
    console.timeEnd('benchmarkMapStr');
};

const benchmarkObjStr = (size: number) => {
    console.time('benchmarkObjStr');
    let obj: Record<string, number> = {};
    for (let i = 0; i < size; i++) obj[i.toString()] = i;
    for (let i = 0; i < size; i++) {
        let x = obj[i.toString()];
    }
    console.timeEnd('benchmarkObjStr');
};

const benchmarkMapDel = (size: number) => {
    console.time('benchmarkMapDel');
    let map = new Map();
    for (let i = 0; i < size; i++) map.set(i, i);
    for (let i = 0; i < size; i++) {
        let x = map.get(i);
        map.delete(i);
    }
    console.timeEnd('benchmarkMapDel');
};

const benchmarkObjDel = (size: number) => {
    console.time('benchmarkObjDel');
    let obj: Record<number, number> = {};
    for (let i = 0; i < size; i++) obj[i] = i;
    for (let i = 0; i < size; i++) {
        let x = obj[i];
        delete obj[i];
    }
    console.timeEnd('benchmarkObjDel');
};

const size = 1000000;

benchmarkMap(size);
benchmarkObj(size);
benchmarkMapStr(size);
benchmarkObjStr(size);
benchmarkMapDel(size);
benchmarkObjDel(size);
