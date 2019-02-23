var funcs = [], object = {a: 1, b: 1, c: 1};
for (const key in object) {
    funcs.push(function(){
        console.log(key)
    });
}

funcs[0]() //c