<template>
  <div>
    <div>hello test</div>
    <audio id="myAudio" ref="paopaoBg" controls src="https://s.impaopaoBgian.com/web/year-report/test2.mp3"></audio>
    <div @click="start" class="btn">开始</div>
    <div class="beat" v-for="n in 17"></div>
    <audio ref="clickVoice" controls src="http://www.w3school.com.cn/i/horse.ogg"></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "", //歌曲时长
      beats: [],
      speed: 65, //歌曲速度
      interval: "", //每拍的间隔，
      index: -1,
      error: 300, //误差值
      spaceBeat: 4,
      audio:''
    };
  },
  mounted() {
    this.audio = this.$refs.paopaoBg;
    this.clickVoice = this.$refs.clickVoice;
    this.getInterval();
    //console.log(this.interval)
  },
  methods: {
    getInterval(){
      // let base = Math.round(60000 / this.speed);
      // let baseRemainder = base % 10;
      // this.interval = Math.round(base / 10) * 10
      this.interval = 60000 / this.speed;
    },
    start() {
      this.$refs.paopaoBg.play();
      setTimeout(() => {
        this.bindClick();
      }, this.spaceBeat * this.interval);

      setTimeout(() => {
        this.upBeats();
      }, (this.spaceBeat - 2) * this.interval);
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    bindClick() {
      document.body.addEventListener("touchstart", e => {
        //this.clickVoice.play();
        const clickTime = this.audio.currentTime * 1000;
        const remainder = clickTime % this.interval;
        const midPoint = this.interval / 2;
        const errorPoint = this.error / 2;
        if (remainder > midPoint) {
          if (Math.abs(remainder - this.interval) > errorPoint) {
            this.handleClick('wrong')
          } else {
            this.handleClick('right')
          }
        } else {
          if (remainder > errorPoint) {
            this.handleClick('wrong')
          } else {
            this.handleClick('right')
          }
        }
        console.log(this.audio.currentTime * 1000, this.index);
      });
    },
    handleClick(status) {
      this.index = Math.round(this.audio.currentTime * 1000 / this.interval) - this.spaceBeat;
      const curBeats = this.beats[this.index];
      if(curBeats.classList.contains("right") || curBeats.classList.contains("wrong")){
        return
      }
      if (status === "right") {
        console.log("right");
        curBeats.classList.add("right");
      } else if (status === "wrong") {
        console.log("false");
        curBeats.classList.add("wrong");
      }
    },
    upBeats() {
      var beats = document.querySelectorAll(".beat");
      this.beats = beats;
      beats.forEach((e, i) => {
        e.style.left = Math.random() * 300 + "px";
        setTimeout(() => {
          e.classList.add("beat_up");
        }, this.interval * i);
      });
    }
  }
};
</script>
<style lang="less">
body {
  height: 100vh;
  position: relative;
}
.beat {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: -30px;
}
.beat_up {
  animation: up 7s linear forwards;
}
.beat.right {
  background-color: blueviolet;
}
.beat.wrong {
  background-color: gray;
}
@keyframes up {
  0% {
    bottom: 0;
  }
  99% {
    opacity: 1;
  }
  100% {
    bottom: 850px;
    opacity: 0;
    display: none;
  }
}
</style>

