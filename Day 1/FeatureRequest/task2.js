let fullName = "Sahin"
console.log('Inital value is :' , fullName);
fullName = "Sahin Islam";
console.log('After reassigned, value is :' , fullName);

const userId = 232;
console.log('Inital value is :' , userId);
/*
userId = 1
console.log('After reassigned, value is : ' , userId);


This is the error that i got.
c:\Users\azizu\OneDrive\Desktop\30 Days JS\Day 1\FeatureRequest\task2.js:8
userId = 1
       ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (c:\Users\azizu\OneDrive\Desktop\30 Days JS\Day 1\FeatureRequest\task2.js:8:8)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.15.1


*/