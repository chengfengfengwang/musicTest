<template>
  <div>
    123457
    <audio autoplay id="ad1" controls preload="auto" ref="a1" src="../../assets/audio/music_test/q1/topic.mp3"></audio>
    <audio controls preload="auto" ref="a2" src="../../assets/audio/music_test/q1/content.mp3"></audio>
    <div @click="test" class="box"></div>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      // var a1 = this.$refs.a1;
      // var a2 = this.$refs.a2;
      // a1.play();
      // a2.play();
      // a2.pause();
      // a2.addEventListener("canplaythrough", function() {
      //   //SomeJavaScriptCode
      // });
      // a1.addEventListener("ended", () => {
      //   a2.play();
      // });
    },
    autoPlay(id) {
      var audio = document.getElementById(id);
      function play() {
          console.log('zzz')
          audio.play();
          document.removeEventListener("click", play, false);
        };
      //audio.play();

      document.addEventListener("click", play, false);
      
    }
  },
  mounted(){
    this.autoPlay('ad1')
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


