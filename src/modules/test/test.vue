<template>
  <div>
    <div>hello test</div>
    <audio ref="music" controls src="https://s.immusician.com/web/year-report/test2.mp3"></audio>
    <button @click="start">开始</button>
    <div class="beat" v-for="n in 20"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
      beats: [],
      speed: 65,
      clickTime: "",
      interval: "",
      index: 0,
      error: 300,
      spaceBeat: 4
    };
  },
  mounted() {
    // $(".beat").animate(
    //   {
    //     bottom: "350",
    //   },
    //   10000,
    //   function() {
    //     // Animation complete.
    //   }
    // );
    this.interval = 60000 / this.speed;
    //this.bindClick();
  },
  methods: {
    isAccord(num, interval, error) {
      const remainder = num % interval;
      const midPoint = interval / 2;
      const errorPoint = error / 2;
      if (remainder > midPoint) {
        if (Math.abs(remainder - interval) > errorPoint) {
          console.log("false");
        } else {
          console.log("right");
        }
      } else {
        if (remainder > errorPoint) {
          console.log("false");
        } else {
          console.log("right");
        }
      }
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    bindClick() {
      document.body.addEventListener("click", e => {
        this.clickTime = this.time;
        const remainder = this.clickTime % this.interval;
        const midPoint = this.interval / 2;
        const errorPoint = this.error / 2;
        if (remainder > midPoint) {
          if (Math.abs(remainder - this.interval) > errorPoint) {
            console.log("false");
          } else {
            console.log("right");
            this.beats[this.index].style.background = 'blue'
          }
        } else {
          if (remainder > errorPoint) {
            console.log("false");
          } else {
            console.log("right");
            this.beats[this.index].style.background = 'blue'
          }
        }
        console.log(this.time,this.index);
      });
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
    },
    countTime() {
      this.time = 0;
      setInterval(() => {
        this.time += 10;
        //当前处于第几拍的范围内，从0开始
        this.index = Math.floor(this.time / this.interval);
      }, 10);
    },
    start() {
      // this.countTime();
      // this.bindClick();
      this.$refs.music.play();
      setTimeout(() => {
        this.countTime();
        this.bindClick();
      }, this.spaceBeat * this.interval);
      
      setTimeout(() => {
        this.upBeats();
      }, (this.spaceBeat-2) * this.interval);
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: -30px;
}
.beat1 {
  left: 50px;
}
.beat2 {
  left: 250px;
}
.beat3 {
  left: 130px;
}
.beat_up {
  animation: up 5s linear forwards;
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

