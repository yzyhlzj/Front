<template>
  <!-- 组件的结构 -->
  <div class="school-component">
    <h1>学校组件</h1>
    <p>这是一个学校组件的示例</p>
    <p>它可以包含学校的相关信息和功能。</p>
    <p>
      例如，学校名称:{{ schoolName }}、地址:{{ address }}等。
      <button @click="showAddress">查看地址</button>
    </p>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
  name: "School",
  data() {
    return {
      // 组件的数据
      schoolName: "示例学校",
      address: "123 学校街道",
    };
  },
  methods: {
    showAddress() {
      // 显示地址
      alert(`地址: ${this.address}`);
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