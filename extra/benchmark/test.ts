const benchmarkMap = size => {
    console.time('benchmarkMap');
    var map = new Map();
    for (var i = 0; i < size; i++) map.set(i, i);
    for (var i = 0; i < size; i++) var x = map.get(i);
    console.timeEnd('benchmarkMap');
}

const benchmarkObj = size => {
    console.time('benchmarkObj');
    var obj = {};
    for (var i = 0; i < size; i++) obj[i] = i;
    for (var i = 0; i < size; i++) var x = obj[i];
    console.timeEnd('benchmarkObj');
}

const benchmarkMapStr = size => {
    console.time('benchmarkMapStr');
    var map = new Map();
    for (var i = 0; i < size; i++) map.set(i.toString(), i);
    for (var i = 0; i < size; i++) var x = map.get(i.toString());
    console.timeEnd('benchmarkMapStr');
}

const benchmarkObjStr = size => {
    console.time('benchmarkObjStr');
    var obj = {};
    for (var i = 0; i < size; i++) obj[i.toString()] = i;
    for (var i = 0; i < size; i++) var x = obj[i.toString()];
    console.timeEnd('benchmarkObjStr');
}

const benchmarkMapDel = size => {
    console.time('benchmarkMapDel');
    var map = new Map();
    for (var i = 0; i < size; i++) map.set(i, i);
    for (var i = 0; i < size; i++) {
        var x = map.get(i);
        map.delete(i);
    }
    console.timeEnd('benchmarkMapDel');
}

const benchmarkObjDel = size => {
    console.time('benchmarkObjDel');
    var obj = {};
    for (var i = 0; i < size; i++) obj[i] = i;
    for (var i = 0; i < size; i++) {
        var x = obj[i];
        delete obj[i];
    }
    console.timeEnd('benchmarkObjDel');
}

var size = 1000000;

benchmarkMap(size);
benchmarkObj(size);
benchmarkMapStr(size);
benchmarkObjStr(size);
benchmarkMapDel(size);
benchmarkObjDel(size);
