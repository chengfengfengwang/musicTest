<template>
  <div class="swiper-container" id="musicTest">
    <div class="swiper-wrapper">
      <div ref="page1" v-show="true" class="page first swiper-slide stop-swiping">
        <audio preload src="../../assets/audio/music_test/page1/page1.mp3"></audio>
        <img
          v-show="page1Icon=='playing'"
          @click="page1IconPause"
          src="../../assets/img/music_test/play_icon.png"
          alt
          class="play_icon"
        >
        <img
          v-show="page1Icon=='pause'"
          @click="page1IconPlay"
          src="../../assets/img/music_test/play_icon_pause.png"
          alt
          class="play_icon pause"
        >
        <img class="cover" src="../../assets/img/music_test/test_cover.png" alt>
        <div class="begin_btn" @click="beginClick">
          <img src="../../assets/img/music_test/begin_btn.png" alt>
        </div>
      </div>
      <div ref="quest1" v-show="true" class="page common swiper-slide stop-swiping">
        <audio src></audio>
        <div class="topic_card">
          <div class="title">第1题</div>
          <div class="text">仔细听音乐，为它选择一个适合的表情吧！</div>
          <div class="note" @click="Q1CAudio.play()">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1" @click="select(1,'A')">
            <span class="option_text">A</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/yj_happy.png" alt>
            </div>
          </div>
          <div class="option_card option_card2" @click="select(1,'B')">
            <span class="option_text">B</span>
            <div class="option_img"></div>
          </div>
        </div>
      </div>
      <div ref="quest2" v-show="true" class="page common swiper-slide stop-swiping">
        <audio src></audio>
        <div class="topic_card">
          <div class="title">第2题</div>
          <div class="text">仔细听音乐，为它选择一个小动物吧</div>
          <div class="note" @click="Q2CAudio.play()">
            <audio src></audio>
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1" @click="select(2,'A')">
            <span class="option_text">A</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/bao.png" alt>
            </div>
          </div>
          <div class="option_card option_card2" @click="select(2,'B')">
            <span class="option_text">B</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/wugui.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div ref="quest3" v-show="true" class="page bird swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第3题</div>
          <div class="text" style="width:70%">仔细听两只小鸟的叫声，请把音高的小鸟送回家</div>
        </div>
        <div class="bird_main">
          <div class="option_card option_card1" @click="select(3,'A')">
            <span class="option_text">A</span>
            <div ref="q3Bird1" class="option_bird bird"></div>
            <!-- <img src="../../assets/img/music_test/bird1.png" alt class="option_bird bird"> -->
          </div>
          <div class="option_card option_card2" @click="select(3,'B')">
            <span class="option_text">B</span>
            <div ref="q3Bird2" class="option_bird bird"></div>
          </div>
          <img src="../../assets/img/music_test/tree.png" alt class="tree">
        </div>

        <!-- <img src="../../assets/img/music_test/cloud1.png" alt class="cloud cloud1"> -->
        <!-- <img src="../../assets/img/music_test/cloud2.png" alt class="cloud cloud2"> -->
        <!-- <img src="../../assets/img/music_test/cloud3.png" alt class="cloud cloud3"> -->
        <!-- <img src="../../assets/img/music_test/grass1.png" alt class="grass"> -->

        <div class="wave">
          <img src="../../assets/img/music_test/wave.png" alt>
        </div>
      </div>
      <div ref="quest4" v-show="true" class="page bird swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第4题</div>
          <div class="text" style="width:70%">仔细听两只小鸟的叫声，请把音低的小鸟送回家</div>
        </div>
        <div class="bird_main">
          <div class="option_card option_card1" @click="select(4,'A')">
            <span class="option_text">A</span>
            <div ref="q4Bird1" class="option_bird bird"></div>
            <!-- <img src="../../assets/img/music_test/bird1.png" alt class="option_bird bird"> -->
          </div>
          <div class="option_card option_card2" @click="select(4,'B')">
            <span class="option_text">B</span>
            <div ref="q4Bird2" class="option_bird bird"></div>
          </div>
          <img src="../../assets/img/music_test/tree.png" alt class="tree">
        </div>
        <div class="wave">
          <img src="../../assets/img/music_test/wave.png" alt>
        </div>
      </div>
      <div ref="quest5" v-show="true" class="page common swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第5题</div>
          <div class="text">仔细听这两段节奏相同吗？</div>
          <div class="note">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1" @click="select(5,'A')">
            <span class="option_text">A</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/gou.png" alt>
            </div>
          </div>
          <div class="option_card option_card2" @click="select(5,'B')">
            <span class="option_text">B</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/cha.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div ref="quest6" v-show="true" class="page common swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第6题</div>
          <div class="text">仔细听这两段节奏相同吗？</div>
          <div class="note">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1" @click="select(6,'A')">
            <span class="option_text">A</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/gou.png" alt>
            </div>
          </div>
          <div class="option_card option_card2" @click="select(6,'B')">
            <span class="option_text">B</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/cha.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div ref="quest7" v-show="true" class="page common swiper-slide stop-swiping">
        
      </div>
      <div ref="quest8" v-show="true" class="page common swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第8题</div>
          <div class="text">请选出下面哪一个是钢琴？</div>
          <!-- <div class="note">
            <img src="../../assets/img/music_test/note.png" alt>
          </div> -->
        </div>
        <div class="page_main">
          <div class="option_card option_card1" @click="select(8,'A')">
            <span class="option_text">A</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/piano.png" alt>
            </div>
          </div>
          <div class="option_card option_card2" @click="select(8,'B')">
            <span class="option_text">B</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/sfq.png" alt>
            </div>
          </div>
        </div>
      </div>
       <div ref="quest9" v-show="true" class="page common swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第9题</div>
          <div class="text">仔细听这是哪个乐器发出的声音？</div>
          <div class="note">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1" @click="select(9,'A')">
            <span class="option_text">A</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/xh.png" alt>
            </div>
          </div>
          <div class="option_card option_card2" @click="select(9,'B')">
            <span class="option_text">B</span>
            <div class="option_img">
              <img src="../../assets/img/music_test/xtq.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div v-show="true" class="page last swiper-slide stop-swiping">
        <img class="cover" src="../../assets/img/music_test/test_cover.png" alt>
        <div class="result_bg_wrapper">
          <div class="content">
            <div class="core">98分</div>
            <div class="byond">超越了98%的人</div>
            <div class="comment">
              <img src="../../assets/img/music_test/comment_left.png" alt class="comment_left">
              <p>“哇，你非常的具有音乐天赋!</p>
              <p>未来音乐大师也许就是你哦!”</p>
              <img src="../../assets/img/music_test/comment_right.png" alt class="comment_right">
            </div>
            <div class="star_items_wrapper">
              <div class="star_items">
                <div class="label">
                  <span>音</span>
                  <span>乐</span>
                  <span>感</span>
                  <span>受</span>
                  <span>力</span>
                </div>

                <span>：</span>
                <div class="stars">
                  <img src="../../assets/img/music_test/star.png" alt class="star">
                </div>
              </div>
              <div class="star_items">
                <div class="label">
                  <span>音</span>
                  <span>乐</span>
                  <span>记</span>
                  <span>忆</span>
                </div>

                <span>：</span>
                <div class="stars">
                  <img src="../../assets/img/music_test/star.png" alt class="star">
                </div>
              </div>
              <div class="star_items">
                <div class="label">
                  <span>节</span>
                  <span>奏</span>
                  <span>感</span>
                </div>

                <span>：</span>
                <div class="stars">
                  <img src="../../assets/img/music_test/star.png" alt class="star">
                </div>
              </div>
              <div class="star_items">
                <div class="label">
                  <span>音</span>
                  <span>乐</span>
                  <span>常</span>
                  <span>识</span>
                </div>

                <span>：</span>
                <div class="stars">
                  <img v-for="n in 5" src="../../assets/img/music_test/star.png" alt class="star">
                </div>
              </div>
            </div>
          </div>

          <img class="result_bg" src="../../assets/img/music_test/result_bg.png" alt>
        </div>
      </div>
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
  data() {
    return {
      swiper: "",
      page1Icon: "pause"
    };
  },
  methods: {
    Q1Enter() {
      this.Q1TAudio.play();
      this.Q1TAudio.addEventListener("ended", () => {
        this.Q1CAudio.play();
      });
    },
    Q2Enter() {
      this.Q1TAudio.pause();
      this.Q1CAudio.pause();
      this.Q2TAudio.play();
      this.Q2TAudio.addEventListener("ended", () => {
        this.Q2CAudio.play();
      });
    },
    Q3Enter() {
      this.Q2TAudio.pause();
      this.Q2CAudio.pause();
      this.Q3TAudio.play();
      this.Q3TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 3) {
          return;
        }
        this.Q3AAudio.play();
        this.$refs.q3Bird1.classList.add("bounce");
      });
      this.Q3AAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 3) {
          return;
        }
        setTimeout(() => {
          this.Q3BAudio.play();
          this.$refs.q3Bird2.classList.add("bounce");
        }, 500);
      });
    },
    Q4Enter() {
      this.Q3TAudio.pause();
      this.Q3AAudio.pause();
      this.Q3BAudio.pause();
      this.Q4TAudio.play();
      this.Q4TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 4) {
          return;
        }
        this.Q4AAudio.play();
        this.$refs.q4Bird1.classList.add("bounce");
      });
      this.Q4AAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 4) {
          return;
        }
        setTimeout(() => {
          this.Q4BAudio.play();
          this.$refs.q4Bird2.classList.add("bounce");
        }, 500);
      });
    },
    Q5Enter() {
      this.Q4TAudio.pause();
      this.Q4AAudio.pause();
      this.Q4BAudio.pause();
      this.Q5TAudio.play();
      this.Q5TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 5) {
          return;
        }
        this.Q5AAudio.play();
      });
      this.Q5AAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 5) {
          return;
        }
        setTimeout(() => {
          this.Q5BAudio.play();
        }, 500);
      });
    },
    Q6Enter() {
      this.Q5TAudio.pause();
      this.Q5AAudio.pause();
      this.Q5BAudio.pause();
      this.Q6TAudio.play();
      this.Q6TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 6) {
          return;
        }
        this.Q6AAudio.play();
      });
      this.Q6AAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 6) {
          return;
        }
        setTimeout(() => {
          this.Q6BAudio.play();
        }, 500);
      });
    },
    Q7Enter() {
      this.Q6TAudio.pause();
      this.Q6AAudio.pause();
      this.Q6BAudio.pause();
      this.Q7TAudio.play();
      // this.Q6TAudio.addEventListener('ended',()=>{
      //   if(this.swiperIndex!==6){
      //     return
      //   }
      //   this.Q6AAudio.play();
      // })
      // this.Q6AAudio.addEventListener('ended',()=>{
      //    if(this.swiperIndex!==6){
      //     return
      //   }
      //   setTimeout(() => {
      //     this.Q6BAudio.play()
      //   }, 500);
      // })
    },
    Q8Enter() {
      this.Q7TAudio.pause();
      this.Q8TAudio.play();
    },
    Q9Enter() {
      this.Q8TAudio.pause();
      this.Q9TAudio.play();
      this.Q9TAudio.addEventListener('ended',()=>{
        console.log(this.swiperIndex)
        if(this.swiperIndex!==9){
          return
        }
        this.Q9CAudio.play();
      })
      
      // this.Q6TAudio.addEventListener('ended',()=>{
      //   if(this.swiperIndex!==6){
      //     return
      //   }
      //   this.Q6AAudio.play();
      // })
      // this.Q6AAudio.addEventListener('ended',()=>{
      //    if(this.swiperIndex!==6){
      //     return
      //   }
      //   setTimeout(() => {
      //     this.Q6BAudio.play()
      //   }, 500);
      // })
    },
    select(qIndex, value) {
      this.swiper.slideNext();
    },
    page1IconPlay() {
      this.page1Icon = "playing";
      this.page1Audio.play();
    },
    page1IconPause() {
      this.page1Icon = "pause";
      this.page1Audio.pause();
    },
    beginClick() {
      this.swiper.slideNext();
      this.page1Audio.pause();
    },
    page1Play() {
      this.page1Audio.addEventListener("canplay", () => {
        this.page1Audio.play();
      });
    }
  },
  mounted() {
    var that = this;
    this.Q1TAudio = new Audio();
    this.Q1TAudio.src = require("../../assets/audio/music_test/q1/topic.mp3");
    this.Q1CAudio = new Audio();
    this.Q1CAudio.src = require("../../assets/audio/music_test/q1/content.mp3");

    this.Q2TAudio = new Audio();
    this.Q2TAudio.src = require("../../assets/audio/music_test/q2/topic.mp3");
    this.Q2CAudio = new Audio();
    this.Q2CAudio.src = require("../../assets/audio/music_test/q2/content.mp3");

    this.Q3TAudio = new Audio();
    this.Q3TAudio.src = require("../../assets/audio/music_test/q3/topic.mp3");
    this.Q3AAudio = new Audio();
    this.Q3AAudio.src = require("../../assets/audio/music_test/q3/A_3_do.mp3");
    this.Q3BAudio = new Audio();
    this.Q3BAudio.src = require("../../assets/audio/music_test/q3/B_3_sol.mp3");

    this.Q4TAudio = new Audio();
    this.Q4TAudio.src = require("../../assets/audio/music_test/q4/topic.mp3");
    this.Q4AAudio = new Audio();
    this.Q4AAudio.src = require("../../assets/audio/music_test/q4/A_4_fa.mp3");
    this.Q4BAudio = new Audio();
    this.Q4BAudio.src = require("../../assets/audio/music_test/q4/b_4_re.mp3");

    this.Q5TAudio = new Audio();
    this.Q5TAudio.src = require("../../assets/audio/music_test/q5/topic.mp3");
    this.Q5AAudio = new Audio();
    this.Q5AAudio.src = require("../../assets/audio/music_test/q5/A_5.mp3");
    this.Q5BAudio = new Audio();
    this.Q5BAudio.src = require("../../assets/audio/music_test/q5/B_5.mp3");

    this.Q6TAudio = new Audio();
    this.Q6TAudio.src = require("../../assets/audio/music_test/q6/topic.mp3");
    this.Q6AAudio = new Audio();
    this.Q6AAudio.src = require("../../assets/audio/music_test/q6/A_6.mp3");
    this.Q6BAudio = new Audio();
    this.Q6BAudio.src = require("../../assets/audio/music_test/q6/b_6.mp3");

    this.Q7TAudio = new Audio();
    this.Q7TAudio.src = require("../../assets/audio/music_test/q7/topic.mp3");

    this.Q8TAudio = new Audio();
    this.Q8TAudio.src = require("../../assets/audio/music_test/q8/topic.mp3");

    this.Q9TAudio = new Audio();
    this.Q9TAudio.src = require("../../assets/audio/music_test/q9/topic.mp3");
    this.Q9CAudio = new Audio();
    this.Q9CAudio.src = require("../../assets/audio/music_test/q9/content.mp3");

    this.page1Audio = this.$refs.page1.querySelector("audio");
    this.swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      speed: 800,
      //   noSwiping : true,
      //     noSwipingClass : 'stop-swiping',
      on: {
        slideNextTransitionEnd() {
          that.swiperIndex = that.swiper.activeIndex;
          switch (that.swiperIndex) {
            case 1: {
              console.log("zzz1");
              that.Q1Enter();
              break;
            }
            case 2: {
              that.Q2Enter();
              console.log("zzz2");
              break;
            }
            case 3: {
              that.Q3Enter();
              console.log("zzz3");
              break;
            }
            case 4: {
              that.Q4Enter();
              console.log("zzz4");
              break;
            }
            case 5: {
              that.Q5Enter();
              console.log("zzz5");
              break;
            }
            case 6: {
              that.Q6Enter();
              console.log("zzz6");
              break;
            }
            case 7: {
              that.Q7Enter();
              console.log("zzz7");
              break;
            }
            case 8: {
              that.Q8Enter();
              console.log("zzz8");
              break;
            }
            case 9: {
              that.Q9Enter();
              console.log("zzz9");
              break;
            }
          }
        }
      }
    });
    // setTimeout(() => {
    //     swiper.slideNext();
    // }, 2000);
    // setTimeout(() => {
    //     this.$refs.bird2.classList.add('flyto')
    // }, 1000);
    //this.page1Play()


    // document.body.addEventListener('touchstart',()=>{
    //   this.Q9CAudio.play()
    // })
  }
};
</script>
<style lang="less">
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
  background: no-repeat 20.5% 0.2% ~"/" 68px 18px url("../../assets/img/music_test/cloud1.png"),
    no-repeat right 0% top 25.6% ~"/" 48px 22px url("../../assets/img/music_test/cloud2.png"),
    no-repeat left 11.6% top 33.2% ~"/" 69px 14px url("../../assets/img/music_test/cloud3.png"),
    no-repeat left 0% bottom 0% ~"/" 77px 70px url("../../assets/img/music_test/grass1.png");
  background-color: rgba(255, 194, 149, 1);

  .topic_card {
    position: absolute;
    top: 4.7%;
    left: 50%;
    transform: translateX(-50%);
    width: 325px;
    height: 143px;

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
      width: 90%;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: bold;
      color: rgba(43, 43, 43, 1);
    }
  }
}
//首屏
.page.first {
  .play_icon {
    position: absolute;
    right: -5px;
    top: 0px;
    padding: 20px;
    width: 70px;
  }
  .cover {
    width: 100%;
  }
  .begin_btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 77%;
    img {
      width: 190px;
    }
  }
  background: #2e5dad;
  //background: no-repeat top 0 left 0 ~"/" cover url("../../assets/img/music_test/test_cover.png");
  //background-color: rgba(255, 194, 149, 1);
}
//最后一屏
.page.last {
  .cover {
    width: 100%;
  }
  .result_bg_wrapper {
    width: 375px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 12.8%;
    padding-top: 30px;
    .content {
      position: relative;
      z-index: 12;
    }
    .result_bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
    text-align: center;
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    .core {
      margin-top: 30px;
      font-size: 40px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(255, 106, 63, 1);
    }
    .comment {
      position: relative;
      height: 78px;
      //line-height: 78px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80%;
      margin: 20px auto;
      font-size: 15px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(68, 68, 68, 1);
      & > p {
        margin-bottom: 5px;
      }
      .comment_left,
      .comment_right {
        position: absolute;
        width: 33px;
        top: 50%;
        transform: translateY(-50%);
      }
      .comment_left {
        left: 0;
      }
      .comment_right {
        right: 0;
      }
    }
    .star_items_wrapper {
      //width: 60%;
      // position: absolute;
      // top:106%;
      // left: 50%;
      // transform: translateX(-50%);
      margin: auto;
      .star_items {
        display: flex;
        margin-bottom: 10px;
        width: 50%;
        margin: 0 auto 10px auto;
        position: relative;
        left: -10px;
        .label {
          width: 100px;
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          & > span {
            display: block;
          }
        }
      }
    }
  }
  background: #2e5dad;
  //background: no-repeat top 0 left 0 ~"/" cover url("../../assets/img/music_test/test_cover.png");
  //background-color: rgba(255, 194, 149, 1);
}
//鸟
.page.bird {
  .topic_card {
    background: url("../../assets/img/music_test/topic_card.png") no-repeat
      center/cover;
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
  .wave {
    position: absolute;
    left: 0;
    bottom: -7px;
    img {
      width: 100%;
    }
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
    //transition: all 3s 1s;
    transition: transform 0.5s, left 3s, right 3s, top 3s, bottom 3s;
    width: 40px;
    height: 40px;
    background: url("../../assets/img/music_test/bird_all.png") no-repeat;
    //background-position: 0% 0%;
    background-size: 212%;
    //animation: fly .7s steps(1) 0s infinite both;
    //animation: fly 0.5s steps(2) 0s infinite both;
  }
  .bird.bounce {
    //transform: translateY(-40px)
    animation: bounce 1s 0s both;
  }
  @keyframes bounce {
    60% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
  @keyframes fly {
    to {
      background-position: 185% 0;
    }
  }
}
//普通选择题
.page.common {
  background: no-repeat 20.5% 0.2% ~"/" 68px 18px url("../../assets/img/music_test/cloud1.png"),
    no-repeat right 0% top 25.6% ~"/" 48px 22px url("../../assets/img/music_test/cloud2.png"),
    no-repeat left 11.6% top 33.2% ~"/" 69px 14px url("../../assets/img/music_test/cloud3.png"),
    no-repeat left 0% bottom 0% ~"/" 77px 70px url("../../assets/img/music_test/grass1.png"),
    no-repeat right 0% bottom 0% ~"/" 77px 70px url("../../assets/img/music_test/grass2.png");
  background-color: rgba(255, 194, 149, 1);
  .topic_card {
    background: url("../../assets/img/music_test/topic_card_b.png") no-repeat
      center/cover;
    height: 180px;
    .note {
      position: absolute;

      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      img {
        width: 72px;
      }
    }
    .text {
      top: 28%;
    }
  }
  .page_main {
    width: 335px;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30%;
    .option_card {
      z-index: 10;
      position: absolute;
      //left: 6.93%;
      width: 145px;
      height: 100px;
      line-height: 100px;
      background: url("../../assets/img/music_test/option_card.png") no-repeat
        center/cover;
      .option_text {
        margin-left: 13%;
        font-size: 30px;
        font-family: PingFangSC-Medium;
        font-weight: bold;
        color: rgba(245, 150, 0, 1);
      }
      .option_img {
        position: absolute;
        right: 25px;
        top: 50%;
        line-height: normal;
        transform: translateY(-50%);
        img {
          width: 43px;
        }
      }
    }

    .option_card1 {
      top: 34.9%;
      left: 0;
    }
    .option_card2 {
      top: 34.9%;
      right: 0;
    }
  }
}
</style>

