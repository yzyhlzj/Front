<template>
  <!-- 组件的结构 -->
  <div class="school-component">
    <h2>学生姓名:{{ studentName }}</h2>
    <h2>学生年龄:{{ age }}</h2>

    <button @click="showStudentName">查看地址</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
  name: "Student",
  data() {
    return {
      // 组件的数据
      studentName: "张三",
      age: 18,
    };
  },
  methods: {
    showStudentName() {
      // 显示地址
      alert(`学生姓名: ${this.studentName}`);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.school-component {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  background-color: orange;
}
</style>