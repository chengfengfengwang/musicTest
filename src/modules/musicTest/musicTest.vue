<template>
  <div class="swiper-container" id="musicTest">
    <div class="swiper-wrapper">
      <div class="page swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第五题</div>
          <div class="text">亭边两只小鸟的音高，选出音高的小鸟帮它回家</div>
        </div>
        <div class="bird_main">
          <div class="option_card option_card1">
            <span class="option_text">A</span>
            <div class="option_bird bird"></div>
            <!-- <img src="../../assets/img/music_test/bird1.png" alt class="option_bird bird"> -->
          </div>
          <div class="option_card option_card2">
            <span class="option_text">B</span>
            <div ref="bird2" class="option_bird bird"></div>
          </div>
          <img src="../../assets/img/music_test/tree.png" alt class="tree">
        </div>

        <div class="test_box"></div>
        <!-- <img src="../../assets/img/music_test/cloud1.png" alt class="cloud cloud1"> -->
        <img src="../../assets/img/music_test/cloud2.png" alt class="cloud cloud2">
        <img src="../../assets/img/music_test/cloud3.png" alt class="cloud cloud3">
        <img src="../../assets/img/music_test/grass1.png" alt class="grass">

        <div class="wave">
          <img src="../../assets/img/music_test/wave.png" alt>
        </div>
      </div>
      <div class="page swiper-slide stop-swiping">i am page2</div>
    </div>

    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>-->
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    console.log(Swiper);
    var swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      speed: 800
      //   noSwiping : true,
      //     noSwipingClass : 'stop-swiping',
    });
    // setTimeout(() => {
    //     swiper.slideNext();
    // }, 2000);
    // setTimeout(() => {
    //     this.$refs.bird2.classList.add('flyto')
    // }, 1000);
  }
};
</script>
<style lang="less">
.test_box {
  z-index: 9;
  background: #000;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20%;
  bottom: 38%;
}

// .font-size(@sizeValue:16) {
//   @vw: 16 / 375 * 100;
//   @result: @sizeValue / 16 * @vw;
//   font-size: ~"@{result}vw";
// }
// html {
//   .font-size(16);
// }
@media screen and (max-width: 500px) {
  html {
    font-size: 100%;
  }
}
@media screen and (min-width: 500px) {
  html {
    font-size: 140%;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
#musicTest * {
  box-sizing: border-box;
}
.page {
  position: relative;
  //height: 100vh;
  height: 100%;
  //background:  no-repeat 20.5% 0.2% / 2% url('../../assets/img/music_test/cloud1.png');
  background:  no-repeat 20.5% 0.2%/68px 18px url('../../assets/img/music_test/cloud1.png');
  background-color: rgba(255, 194, 149, 1);
  .wave {
    position: absolute;
    left: 0;
    bottom: -7px;
    img {
      width: 100%;
    }
  }
  .topic_card {
    position: absolute;
    top: 4.7%;
    left: 50%;
    transform: translateX(-50%);
    width: 325px;
    height: 143px;
    background: url("../../assets/img/music_test/topic_card.png") no-repeat
      center/cover;
    .title {
      position: absolute;
      width: 133px;
      height: 31px;
      line-height: 31px;
      top: 13px;
      left: 50%;
      transform: translateX(-50%);
      background: url("../../assets/img/music_test/title.png") no-repeat
        center/cover;
      text-align: center;
      font-size: 13px;
      font-family: PingFangSC-Regular;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .text {
      position: absolute;
      top: 43%;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: bold;
      color: rgba(43, 43, 43, 1);
    }
  }
  .bird_main {
    //width: 100%;
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30%;
    //height: 61vh;
    .option_card {
      z-index: 10;
      position: absolute;
      left: 6.93%;
      width: 130px;
      height: 55px;
      line-height: 55px;
      background: url("../../assets/img/music_test/option_card.png") no-repeat
        center/cover;
      .option_text {
        margin-left: 13%;
        font-size: 27px;
        font-family: PingFangSC-Medium;
        font-weight: bold;
        color: rgba(245, 150, 0, 1);
      }
    }

    .option_card1 {
      top: 34.9%;
    }
    .option_card2 {
      top: 60.3%;
    }
    .tree {
      width: 134px;
      //width: 35.7vw;
      //height: 61vh;
      position: absolute;
      right: 0;
      //top:401px;
      top: 0;
    }
  }

  .cloud {
    position: absolute;
  }
  .cloud1 {
    width: 68px;
    left: 20.5%;
    top: 0.2%;
  }
  .cloud2 {
    width: 48px;
    right: 0;
    top: 25.6%;
  }
  .cloud3 {
    width: 69px;
    left: 11.6%;
    top: 33.2%;
  }
  .grass {
    width: 77px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .option_bird {
    position: absolute;
    right: 23%;
    top: 50%;
    transform: translateY(-50%);
  }
  .flyto {
    right: -91%;
    top: -85%;
  }
  //动画部分
  .bird {
    transition: all 3s 1s;
    width: 40px;
    height: 40px;
    background: url("../../assets/img/music_test/bird_all.png") no-repeat;
    //background-position: 0% 0%;
    background-size: 212%;
    //animation: fly .7s steps(1) 0s infinite both;
    animation: fly 0.5s steps(2) 0s infinite both;
  }
  @keyframes fly {
    to {
      background-position: 185% 0;
    }
  }
}
</style>

