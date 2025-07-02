import App from './App.vue';
import Vue from 'vue';

// new Vue({
//     components: {
//         App
//     },
// }).$mount('#app');

/**
 * 关于不同版本的Vue:
 * 1、vue.js与vue.runtime.js的区别：
 *   (1)vue.js是完整版的Vue，包含核心功能和模板解析器
 *   (2)vue.runtime.js是运行时版本的Vue，只包含核心功能，不包含模板解析器
 * 2、因为vue.runtime.js不包含模板解析器，所以不能使用template配置项,
 *   只能使用render函数收到的createElement函数去指定具体内容
 */

new Vue({
    render: h => h(App),
    //render: h => h('h1', 'Hello Vue!'),
}).$mount('#app');