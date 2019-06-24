<template>
  <div>
    1234578
    <audio controls preload="auto" ref="a1" src="../../assets/audio/music_test/q1/topic.mp3"></audio>
    <audio controls preload="auto" ref="a2" src="../../assets/audio/music_test/q1/content.mp3"></audio>
    <div @click="test" class="box"></div>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      var a1 = this.$refs.a1;
      var a2 = this.$refs.a2;
      a1.play();
      // a2.addEventListener("canplaythrough", function() {
      //   //SomeJavaScriptCode
      // });
      a1.addEventListener("ended", () => {
        a2.play();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 300px;
  height: 300px;
  background-color: #000;
}
</style>


