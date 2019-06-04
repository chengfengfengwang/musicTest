<template>
  <div>
    <div>hello test</div>
    <audio id="myAudio" ref="music" controls src="https://s.immusician.com/web/year-report/test2.mp3"></audio>
    <div @click="start" class="btn">开始</div>
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
      index: -1,
      error: 300,
      spaceBeat: 4,
      audio:''
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
    this.audio = this.$refs.music;
    this.$refs.music.addEventListener('play',()=>{
      
      console.log(this.audio.currentTime)
    })
    this.getInterval();
    console.log(this.interval)
  },
  methods: {
    getInterval(){
      // let base = Math.round(60000 / this.speed);
      // let baseRemainder = base % 10;
      // this.interval = Math.round(base / 10) * 10
      this.interval = 60000 / this.speed;
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    bindClick() {
      document.body.addEventListener("touchstart", e => {
        this.clickTime = this.time;
        const remainder = this.clickTime % this.interval;
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
        console.log(this.time, this.index);
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
        //console.log(this.audio.currentTime)
        this.time += 10;
        //当前处于第几拍的范围内，从0开始
        //this.index = Math.round(this.time / this.interval);
        //this.index = Math.floor(this.time / this.interval);
        // if((this.time % this.interval)===0){
        //   this.index = Math.floor(this.time/this.interval)
        // }
      }, 10);
    },
    start() {
      this.$refs.music.play();
      setTimeout(() => {
        this.countTime();
        this.bindClick();
      }, this.spaceBeat * this.interval);

      setTimeout(() => {
        this.upBeats();
      }, (this.spaceBeat - 2) * this.interval);
    },
    handleClick(status) {
      //this.index+=1;
      this.index = Math.round(this.time / this.interval)
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
  animation: up 6s linear forwards;
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

