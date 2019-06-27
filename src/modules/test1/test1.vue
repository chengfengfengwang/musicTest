<template>
  <div>
    123457
    <!-- <audio autoplay id="ad1" controls preload="auto" ref="a1" src="../../assets/audio/music_test/q1/topic.mp3"></audio>
    <audio controls id="ad2" preload="auto" ref="a2" src="../../assets/audio/music_test/q1/content.mp3"></audio>-->
    <div @click="play" class="box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      audio: ""
    };
  },
  methods: {
    play(id) {
      //var audio = document.getElementById(id);
      console.log("zzz");
      this.audio.play();
      //document.removeEventListener("click", play, false);

      //audio.play();
    }
  },
  mounted() {
    this.audio = new Audio();
    this.audio.src = require("../../assets/audio/music_test/q1/topic.mp3");
    let src2 = require("../../assets/audio/music_test/q1/content.mp3");
    //var audio1 = document.getElementById('ad1');
    //var audio2 = document.getElementById('ad2');
    // this.audio.addEventListener("ended", () => {
    //   console.log("end");
    //   setTimeout(() => {
    //     this.audio.src = require("../../assets/audio/music_test/q1/content.mp3");
    //     this.audio.play();
    //   }, 2000);
    //   //audio2.play()
    // });
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


