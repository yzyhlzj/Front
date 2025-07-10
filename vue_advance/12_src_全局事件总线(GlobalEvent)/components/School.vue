<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>模范学生姓名: {{ studentName }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: "hohai university",
      address: "河海大学",
      studentName: "",
    };
  },
  mounted() {
    console.log("School", this);
    this.$bus.$on("hello", (data) => {
      console.log(`我是School组件,我收到了数据,${data}`);
      //console.log(typeof data); string数据类型
      this.studentName = data;
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello"); //销毁解绑
  },
};
</script>

<style scoped>
/*scoped代表局部的*/
.demo {
  background: skyblue;
  padding: 5px;
}
</style>


