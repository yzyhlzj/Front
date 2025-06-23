//分别导出的方式，在前面加export关键字
export const name = '张三'
export const motto = '学无止境'

export function getTel() {
    return '123456789'
}

export function getHobby() {
    return ['打篮球', '看书', '旅游']
}

// const name = '张三'
// const motto = '学无止境'

// function getTel() {
//     return '123456789'
// }

// function getHobby() {
//     return ['打篮球', '看书', '旅游']
// }

//统一导出的方式，export {XXX, XXX, ...}，这个花括号不是一个对象
//export { name, motto, getTel }
//默认导出方式，再导入时就不用增加花括号了
// export default {
//     name: name,
//     motto: motto,
//     getTel: getTel,
//     getHobby: getHobby
// }
export default 9000;
