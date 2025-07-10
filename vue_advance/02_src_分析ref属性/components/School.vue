<template>
  <div class="demo">
    <h1>学校名称:{{ name }}</h1>
    <h1>学校地址: {{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      address: "南京",
      name: "河海大学",
    };
  },
};
</script>
<style scoped>
.demo {
  background: aqua;
}
</style>
