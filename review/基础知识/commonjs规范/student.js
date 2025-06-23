const name = '张三'
const motto = '学无止境'

function getTel() {
    return '123456789'
}

function getHobby() {
    return ['打篮球', '看书', '旅游']
}
module.exports = {
    name,
    motto,
    getTel,
    getHobby
}
// exports.name = name


// 输出当前函数的名称,之所以能使用module是因为函数中传入了module参数
//console.log(arguments.callee.toString()); 