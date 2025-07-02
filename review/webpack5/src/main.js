import count from "./js/count";
import sum from "./js/sum";
import "./css/index.css";
import "./less/index.less";

console.log("count:", count(1, 2));
console.log("sum:", sum(1, 2, 3, 4, 5));

const blogs = ['语文', '数学', '英语']
const ul = document.createElement("ul");
blogs.forEach((blog) => {
    const li = document.createElement("li");
    li.innerText = blog;
    ul.appendChild(li);
})
document.body.appendChild(ul);

const h1 = document.createElement("h1");
h1.innerText = "测试添加元素1234";
document.body.prepend(h1);