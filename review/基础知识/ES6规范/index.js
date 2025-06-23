console.log('Hello, ES6!');
//import * as school from './school.js';
//import { name, motto, getTel } from './student.js';
//import * as student from './student.js';
// import student from './student.js';

// console.log(student.name);
// console.log(student.motto);
// console.log(student.getTel());
// console.log(student.getHobby());


//import 不接收任何值直接导入，可以执行js文件中的代码
//import './operation.js';

const btn = document.getElementById('btn');
btn.onclick = async () => {
    const student = await import('./student.js');
    console.log(student);
}