// 1 = 00000001
// 2 = 00000010
// | = 00000011 = 3
// & = 00000000 = 0

console.log(1 | 2); // bitwise OR
console.log(1 & 2); // Bitwise And


// implement a permission system
// Read, Write, and Execute
// 00000100 = Read
// 00000010 = Write
// 00000001 = Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message)