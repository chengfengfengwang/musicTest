<template>
  <div>
    <div>hello test111</div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(process.env);
    this.$dialog.alert({
      message: "弹窗内容"
    });
  }
};
</script>

