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


//打印调用的函数，解释了cjs中为什么能使用module对象
//console.log(arguments.callee.toString()); 