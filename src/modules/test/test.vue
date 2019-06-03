<template>
  <div>
    <div>hello test</div>
    <audio controls src="http://image.yinji.immusician.com/cover/game_material155704803581981.mp3"></audio>
    <button @click="start">开始</button>
    <div>
      <span class="beat" v-for="n in 10">正</span>
    </div>
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: ""
    };
  },
  mounted() {
    $(".box").animate(
      {
        bottom: "350",
      },
      10000,
      function() {
        // Animation complete.
      }
    );
    document.body.addEventListener("click", e => {
      console.log(this.time);
      this.appendT();
    });
  },
  methods: {
    start() {
      this.time = 0;
      setInterval(() => {
        this.time += 10;
      }, 10);
    },
    appendT() {
      var span = document.createElement("span");
      span.innerHTML = "正";
      document.body.appendChild(span);
    },
    appendF() {
      var span = document.createElement("span");
      span.innerHTML = "负";
      document.body.appendChild(span);
    }
  }
};
</script>
<style lang="less">
body {
  height: 100vh;
  position: relative;
}
.box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: 0;
}
.box1{
  left: 50px;
}
.box2{
  left: 250px;
}
.box3{
  left: 130px;
}
</style>

