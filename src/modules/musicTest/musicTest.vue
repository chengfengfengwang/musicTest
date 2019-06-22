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
        <div class="begin_btn next_dot" @click="beginClick">
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
          <div class="option_card option_card1 next_dot" @click="select(1,'A',true)">
            <div class="option_img">
              <img src="../../assets/img/music_test/yj_happy.png" alt>
            </div>
          </div>
          <div class="option_card option_card2 next_dot" @click="select(1,'B',false)">
            <div class="option_img">
              <img src="../../assets/img/music_test/sad.png" alt>
            </div>
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
          <div class="option_card option_card1 next_dot" @click="select(2,'A',false)">
            <div class="option_img">
              <img class="q2a" src="../../assets/img/music_test/bao.png" alt>
            </div>
          </div>
          <div class="option_card option_card2 next_dot" @click="select(2,'B',true)">
            <div class="option_img">
              <img class="q2b" src="../../assets/img/music_test/wugui.png" alt>
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
          <div class="option_card option_card1 next_dot bird_click" @click="select(3,'A',false)">
            <div ref="q3Bird1" class="option_bird bird bird_click"></div>
            <!-- <img src="../../assets/img/music_test/bird1.png" alt class="option_bird bird"> -->
          </div>
          <div class="option_card option_card2 next_dot bird_click" @click="select(3,'B',true)">
            <div ref="q3Bird2" class="option_bird bird bird_click"></div>
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
          <div class="option_card option_card1 next_dot" @click="select(4,'A',false)">
            <div ref="q4Bird1" class="option_bird bird"></div>
            <!-- <img src="../../assets/img/music_test/bird1.png" alt class="option_bird bird"> -->
          </div>
          <div class="option_card option_card2 next_dot" @click="select(4,'B',true)">
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
          <div class="note" @click="q5NoteClick">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1 next_dot" @click="select(5,'A',true)">
            <div class="option_img">
              <img src="../../assets/img/music_test/gou.png" alt>
            </div>
          </div>
          <div class="option_card option_card2 next_dot" @click="select(5,'B',false)">
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
          <div class="note" @click="q6NoteClick">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1 next_dot" @click="select(6,'A',false)">
            <div class="option_img">
              <img src="../../assets/img/music_test/gou.png" alt>
            </div>
          </div>
          <div class="option_card option_card2 next_dot" @click="select(6,'B',true)">
            <div class="option_img">
              <img src="../../assets/img/music_test/cha.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div ref="quest7" v-show="true" class="page common qiaoji swiper-slide stop-swiping">
        <!-- <audio
          id="myAudio"
          ref="paopaoBg"
          controls
          src="../../assets/audio/music_test/q7/bg.mp3"
        ></audio>-->
        <!-- <div @click="q7PlayStart" class="btn">开始</div> -->
        <div class="topic_card">
          <div class="title">第7题</div>
          <div class="text">请跟着音乐节拍点击屏幕中的泡泡吧</div>
        </div>
        <div class="beat" v-for="n in beatsNum">
          <img class="o" src="../../assets/img/music_test/paopao.png" alt>
          <img src="../../assets/img/music_test/paopao_b.png" alt class="b">
        </div>
      </div>
      <div ref="quest8" v-show="true" class="page q8 common swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第8题</div>
          <div class="text">请选出下面哪一个是钢琴？</div>
          <!-- <div class="note">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>-->
        </div>
        <div class="page_main">
          <div class="option_card option_card1 next_dot" @click="select(8,'A',true)">
            <div class="option_img">
              <img class="q8a" src="../../assets/img/music_test/piano.png" alt>
            </div>
          </div>
          <div class="option_card option_card2 next_dot" @click="select(8,'B',false)">
            <div class="option_img">
              <img class="q8b" src="../../assets/img/music_test/sfq.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div ref="quest9" v-show="true" class="page common swiper-slide stop-swiping">
        <div class="topic_card">
          <div class="title">第9题</div>
          <div class="text">仔细听这是哪个乐器发出的声音？</div>
          <div class="note" @click="Q9CAudio.play()">
            <img src="../../assets/img/music_test/note.png" alt>
          </div>
        </div>
        <div class="page_main">
          <div class="option_card option_card1 next_dot" @click="select(9,'A',false)">
            <div class="option_img">
              <img class="q9a" src="../../assets/img/music_test/xh.png" alt>
            </div>
          </div>
          <div class="option_card option_card2 next_dot" @click="select(9,'B',true)">
            <div class="option_img">
              <img class="q9b" src="../../assets/img/music_test/xtq.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div v-show="true" class="page last swiper-slide stop-swiping">
        <img class="cover" src="../../assets/img/music_test/test_cover.png" alt>
        <div class="result_bg_wrapper">
          <div class="content">
            <div class="core">{{score}}分</div>
            <div class="byond">超越了{{beyondRate}}%的人</div>
            <div class="comment">
              <img src="../../assets/img/music_test/comment_left.png" alt class="comment_left">
              <p v-show="grade==1">“每一个小朋友都有音乐潜能，</p>
              <p v-show="grade==1">加油，你也可以成为音乐小达人!”</p>
              <p v-show="grade==2">“不要小瞧了你的音乐潜能哦!</p>
              <p v-show="grade==2">学习音乐，会让你越来越优秀!”</p>
              <p v-show="grade==3">“哇，你非常的具有音乐天赋!</p>
              <p v-show="grade==3">未来音乐大师也许就是你哦!”</p>
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
                  <div
                    :key="index"
                    v-for="(item,index) in resultItems[0].starArr"
                    v-bind:class="{ half: item=='half' }"
                    class="star_wrapper"
                  >
                    <span class="left"></span>
                    <span class="right"></span>
                    <img class="star" src="../../assets/img/music_test/star.png" alt>
                  </div>
                </div>
              </div>
              <div class="star_items">
                <div class="label">
                  <span>音</span>
                  <span>乐</span>
                  <span>听</span>
                  <span>觉</span>
                </div>

                <span>：</span>
                <div class="stars">
                  <div
                    :key="index"
                    v-for="(item,index) in resultItems[1].starArr"
                    v-bind:class="{ half: item=='half' }"
                    class="star_wrapper"
                  >
                    <span class="left"></span>
                    <span class="right"></span>
                    <img class="star" src="../../assets/img/music_test/star.png" alt>
                  </div>
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
                  <div
                    :key="index"
                    v-for="(item,index) in resultItems[2].starArr"
                    v-bind:class="{ half: item=='half' }"
                    class="star_wrapper"
                  >
                    <span class="left"></span>
                    <span class="right"></span>
                    <img class="star" src="../../assets/img/music_test/star.png" alt>
                  </div>
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
                  <div
                    :key="index"
                    v-for="(item,index) in resultItems[3].starArr"
                    v-bind:class="{ half: item=='half' }"
                    class="star_wrapper"
                  >
                    <span class="left"></span>
                    <span class="right"></span>
                    <img class="star" src="../../assets/img/music_test/star.png" alt>
                  </div>
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
                  <div
                    :key="index"
                    v-for="(item,index) in resultItems[4].starArr"
                    v-bind:class="{ half: item=='half' }"
                    class="star_wrapper"
                  >
                    <span class="left"></span>
                    <span class="right"></span>
                    <img class="star" src="../../assets/img/music_test/star.png" alt>
                  </div>
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
      page1Icon: "pause",
      swiperIndex: 0,
      mySelect: [],
      //打泡泡
      beatsNum: 27, //泡泡数量
      time: "", //歌曲时长
      beats: [],
      speed: 46, //歌曲速度
      needBeats: "", //歌曲节拍数
      interval: "", //每拍的间隔，
      index: -1,
      error: 700, //误差值
      //spaceBeat: 0,
      spaceBeat: 4,
      //结果
      resultItems: [
        { name: "音乐感受力", star: 0, starArr: [] },
        { name: "音乐听觉", star: 0, starArr: [] },
        { name: "音乐记忆", star: 0, starArr: [] },
        { name: "节奏感", star: 0, starArr: [] },
        { name: "音乐常识", star: 0, starArr: [] }
      ],
      allStar: 0,
      score: 0,
      grade: 1,
      beyondRate: 0,
      q8OnOff:true
    };
  },
  methods: {
    q5NoteClick() {
      this.Q5AAudio.play();
      //this.Q5AAudio.pause();
      this.Q5BAudio.play();
      this.Q5BAudio.pause();
      this.Q5TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 5) {
          return;
        }
        this.Q5AAudio.play();
      });
    },
    q6NoteClick() {
      this.Q6AAudio.play();
      //this.Q5AAudio.pause();
      this.Q6BAudio.play();
      this.Q6BAudio.pause();
      this.Q6TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 6) {
          return;
        }
        this.Q6AAudio.play();
      });
    },
    removeNotePlaying() {
      document.querySelectorAll(".note").forEach(e => {
        e.classList.remove("playing");
      });
    },
    //打泡泡
    getInterval() {
      this.interval = 60000 / this.speed;
    },
    q7PlayStart() {
      console.log("start play!");
      this.Q7BgAudio.play();
      this.needBeats = Math.floor((this.Q7BgAudio.duration / 60) * this.speed);
      // setTimeout(() => {
      //   this.bindClick();
      // }, 100);
      this.bindClick();
      //this.upBeats();
      //this.bindClick();
      setTimeout(() => {
        this.upBeats();
      }, (this.spaceBeat - 2) * this.interval);//2拍只后升起泡泡
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    bindClick() {
      document.querySelector(".qiaoji").addEventListener("touchstart", e => {
        //this.clickVoice.play();
        if(this.q8OnOff){
          this.Q8TAudio.play();
          this.Q8TAudio.pause();
          this.q8OnOff = false
        }
        const clickTime = this.Q7BgAudio.currentTime * 1000;
        const remainder = clickTime % this.interval;
        const midPoint = this.interval / 2;
        const errorPoint = this.error / 2;
        if (remainder > midPoint) {
          if (Math.abs(remainder - this.interval) > errorPoint) {
            this.handleClick("wrong");
          } else {
            this.handleClick("right");
          }
        } else {
          if (remainder > errorPoint) {
            this.handleClick("wrong");
          } else {
            this.handleClick("right");
          }
        }
        //console.log(this.Q7BgAudio.currentTime * 1000, this.index);
      });
    },
    handleClick(status) {
      this.index =
        Math.round((this.Q7BgAudio.currentTime * 1000) / this.interval) -
        this.spaceBeat;//当前在第几排减去了空拍
      console.log(this.index)
      const curBeats = this.beats[this.index];
      if (
        curBeats.classList.contains("right") ||
        curBeats.classList.contains("wrong")
      ) {
        return;
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
    },
    //打泡泡
    select(qIndex, value, isRight) {
      console.log("---");
      console.log(qIndex, value, isRight);
      this.mySelect.push({
        index: qIndex,
        detail: value,
        isRight: isRight
      });
      if (qIndex === 3) {
        if (value == "A") {
          this.$refs.q3Bird1.classList.add("f1");
        } else {
          this.$refs.q3Bird2.classList.add("f2");
        }
        setTimeout(() => {
          this.swiper.slideNext();
        }, 2001);
        return;
      }
      if (qIndex === 4) {
        if (value == "A") {
          this.$refs.q4Bird1.classList.add("f1");
        } else {
          this.$refs.q4Bird2.classList.add("f2");
        }
        setTimeout(() => {
          this.swiper.slideNext();
        }, 2001);
        return;
      }
      this.swiper.slideNext();
      //console.log(this.mySelect);
    },
    Q1Enter() {
      console.log("Q1Enter");
      this.Q1TAudio.play();
      this.Q1CAudio.play();
      this.Q1CAudio.pause();
      this.Q1TAudio.addEventListener("ended", () => {
        this.Q1CAudio.play();
      });
      this.Q1CAudio.addEventListener("ended", () => {
        this.removeNotePlaying();
      });
    },
    Q2Enter() {
      console.log("Q2Enter");
      this.Q1TAudio.pause();
      this.Q1CAudio.pause();
      this.Q2TAudio.play();
      this.Q2CAudio.play();
      this.Q2CAudio.pause();
      this.Q2TAudio.addEventListener("ended", () => {
        this.Q2CAudio.play();
      });
      this.Q2CAudio.addEventListener("ended", () => {
        this.removeNotePlaying();
      });
    },
    Q3Enter() {
      console.log("Q3Enter");
      this.Q2TAudio.pause();
      this.Q2CAudio.pause();
      this.Q3TAudio.play();
      //this.Q3TAudio.pause();
      //hack
      this.Q3AAudio.play();
      this.Q3AAudio.pause();
      this.Q3BAudio.play();
      this.Q3BAudio.pause();

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
      console.log("Q4Enter");
      this.Q3TAudio.pause();
      this.Q3AAudio.pause();
      this.Q3BAudio.pause();
      this.Q4TAudio.play();
      this.Q4TAudio.pause();
      setTimeout(() => {
        this.Q4TAudio.play();
      }, 2001);
      //hack
      this.Q4AAudio.play();
      this.Q4AAudio.pause();
      this.Q4BAudio.play();
      this.Q4BAudio.pause();
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
      console.log("Q5Enter");
      this.Q4TAudio.pause();
      this.Q4AAudio.pause();
      this.Q4BAudio.pause();
      this.Q5TAudio.play();
      this.Q5TAudio.pause();
      setTimeout(() => {
        this.Q5TAudio.play();
      }, 2001);
      //hack
      this.Q5AAudio.play();
      this.Q5AAudio.pause();
      this.Q5BAudio.play();
      this.Q5BAudio.pause();
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
      this.Q5BAudio.addEventListener("ended", () => {
        this.removeNotePlaying();
      });
    },
    Q6Enter() {
      console.log("Q6Enter");
      this.Q5TAudio.pause();
      this.Q5AAudio.pause();
      this.Q5BAudio.pause();
      this.Q6TAudio.play();
      //hack
      this.Q6AAudio.play();
      this.Q6AAudio.pause();
      this.Q6BAudio.play();
      this.Q6BAudio.pause();
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
      this.Q6BAudio.addEventListener("ended", () => {
        this.removeNotePlaying();
      });
    },
    Q7Enter() {
      console.log("Q7Enter");
      this.Q6TAudio.pause();
      this.Q6AAudio.pause();
      this.Q6BAudio.pause();
      this.Q7TAudio.play();
      this.Q7BgAudio.play();
      this.Q7BgAudio.pause();
      this.Q7TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 7) {
          return;
        }
        this.q7PlayStart();
      });
      this.Q7BgAudio.addEventListener("ended", () => {
        this.swiper.slideNext();
        this.Q8Enter();
      });
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
      console.log("Q8Enter");
      this.Q7TAudio.pause();
      this.Q7BgAudio.pause();
      this.Q8TAudio.play();
    },
    Q9Enter() {
      console.log("Q9Enter");
      this.Q8TAudio.pause();
      this.Q9TAudio.play();
      //hack
      this.Q9CAudio.play();
      this.Q9CAudio.pause();
      this.Q9TAudio.addEventListener("ended", () => {
        if (this.swiperIndex !== 9) {
          return;
        }
        this.Q9CAudio.play();
      });
      this.Q9CAudio.addEventListener("ended", () => {
        this.removeNotePlaying();
      });
    },
    Q10Enter() {
      console.log("Q10Enter");
      this.Q9TAudio.pause();
      this.Q9CAudio.pause();
      this.Q10G1Audio.play();
      this.Q10G1Audio.pause();
      this.Q10G2Audio.play();
      this.Q10G2Audio.pause();
      this.Q10G3Audio.play();
      this.Q10G3Audio.pause();
      setTimeout(() => {
        //将所有答题情况归类
        this.mySelect.splice(5, 0, { detail: "B", index: 7, isRight: true });
        this.mySelect.forEach((e, idx) => {
          if (e.index == 1 || e.index == 2) {
            if (e.isRight) {
              this.resultItems[0].star += 2.5;
            }
          } else if (e.index == 3 || e.index == 4) {
            if (e.isRight) {
              this.resultItems[1].star += 2.5;
            }
          } else if (e.index == 5 || e.index == 6) {
            if (e.isRight) {
              this.resultItems[2].star += 2.5;
            }
          } else if (e.index == 7) {
            var rightNum = document.querySelectorAll(".beat.right").length;
            var rightRate = (rightNum / (this.needBeats-4)) * 100;
            console.log("rightNum", rightNum, "this.needBeats", this.needBeats);
            if (rightRate >= 90) {
              this.resultItems[3].star = 5;
            } else if (rightRate >= 70 && rightRate < 90) {
              this.resultItems[3].star = 4;
            } else if (rightRate >= 60 && rightRate < 70) {
              this.resultItems[3].star = 3;
            } else if (rightRate >= 40 && rightRate < 60) {
              this.resultItems[3].star = 2;
            } else if (rightRate < 40) {
              this.resultItems[3].star = 1;
            }
          } else if (e.index == 8 || e.index == 9) {
            if (e.isRight) {
              this.resultItems[4].star += 2.5;
            }
          }
        });
        //计算出总星数和展示星星
        this.resultItems.forEach(e => {
          this.allStar += e.star;
          if (e.star == 0) {
            e.starArr = ["all"];
          }
          if (e.star == 1) {
            e.starArr = ["all"];
          }
          if (e.star == 2) {
            e.starArr = ["all", "all"];
          }
          if (e.star == 3) {
            e.starArr = ["all", "all", "all"];
          }
          if (e.star == 4) {
            e.starArr = ["all", "all", "all", "all"];
          } else if (e.star == 2.5) {
            e.starArr = ["all", "all", "half"];
          } else if (e.star == 5) {
            e.starArr = ["all", "all", "all", "all", "all"];
          }
        });
        //总分
        if (this.allStar >= 20) {
          this.score = this.allStar * 4;
          this.grade = 3;
          this.Q10G3Audio.play();
        } else if (this.allStar >= 10 && this.allStar < 20) {
          //10 - 20星 60 - 80分
          this.score = 60 + this.allStar;
          this.grade = 2;
          this.Q10G2Audio.play();
        } else {
          //10星以下60分
          this.score = 6 * this.allStar;
          this.grade = 1;
          this.Q10G1Audio.play();
        }
        if(this.score >= 98){
          this.beyondRate = this.score;
        }else if (this.score < 98 && this.score > 90) {
          this.beyondRate = this.score + 1;
        } else if (this.score <= 90 && this.score > 60) {
          this.beyondRate = this.score + Math.floor(Math.random() * 10);
        } else {
          this.beyondRate = this.score + Math.floor(Math.random() * 20);
        }
      }, 350);
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
    this.Q7BgAudio = new Audio();
    this.Q7BgAudio.src = require("../../assets/audio/music_test/q7/bg.mp3");

    this.Q8TAudio = new Audio();
    this.Q8TAudio.src = require("../../assets/audio/music_test/q8/topic.mp3");

    this.Q9TAudio = new Audio();
    this.Q9TAudio.src = require("../../assets/audio/music_test/q9/topic.mp3");
    this.Q9CAudio = new Audio();
    this.Q9CAudio.src = require("../../assets/audio/music_test/q9/content.mp3");

    this.Q10G1Audio = new Audio();
    this.Q10G1Audio.src = require("../../assets/audio/music_test/q10/grade1.mp3");
    this.Q10G2Audio = new Audio();
    this.Q10G2Audio.src = require("../../assets/audio/music_test/q10/grade2.mp3");
    this.Q10G3Audio = new Audio();
    this.Q10G3Audio.src = require("../../assets/audio/music_test/q10/grade3.mp3");

    this.page1Audio = this.$refs.page1.querySelector("audio");
    //音符转动事件
    document.querySelectorAll(".note").forEach(e => {
      e.addEventListener("click", ele => {
        console.log("qqa");
        console.log(e);
        console.log(e.classList);
        e.classList.add("playing");
      });
    });
    //打泡泡
    this.getInterval();
    //打泡泡

    this.audioArr = [
      this.Q1TAudio,
      this.Q1CAudio,
      this.Q2TAudio,
      this.Q2CAudio,
      this.Q3TAudio,
      this.Q3AAudio,
      this.Q3BAudio,
      this.Q4TAudio,
      this.Q4AAudio,
      this.Q4BAudio,
      this.Q5TAudio,
      this.Q5AAudio,
      this.Q5BAudio,
      this.Q6TAudio,
      this.Q6AAudio,
      this.Q6BAudio,
      this.Q7TAudio,
      this.Q8TAudio,
      this.Q9TAudio,
      this.Q9CAudio,
      this.page1Audio
    ];
    // document.querySelector('.begin_btn').addEventListener('click',()=>{
    //   this.audioArr.forEach(e=>{
    //     e.play();
    //     e.pause()
    //   })
    // })
    this.swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      speed: 800,
        noSwiping : true,
          noSwipingClass : 'stop-swiping',
      on: {
        slideNextTransitionEnd() {
          that.swiperIndex = that.swiper.activeIndex;
        }
      }
    });
    // setTimeout(() => {
    //     swiper.slideNext();
    // }, 2001);
    // setTimeout(() => {
    //     this.$refs.bird2.classList.add('flyto')
    // }, 1000);
    //this.page1Play()

    //document.body.addEventListener("touchstart", (e) => {
    function callBack(e) {
      //if(that.swiperIndex == 1){return}
      console.log("------");
      var index = that.swiperIndex ? that.swiperIndex + 1 : 1;
      console.log("that.swiperIndex----");
      console.log(that.swiperIndex);
      //return
      switch (index) {
        case 1: {
          that.Q1Enter();
          break;
        }
        case 2: {
          that.Q2Enter();
          break;
        }
        case 3: {
          that.Q3Enter();
          break;
        }
        case 4: {
          that.Q4Enter();
          break;
        }
        case 5: {
          that.Q5Enter();
          break;
        }
        case 6: {
          that.Q6Enter();
          break;
        }
        case 7: {
          that.Q7Enter();
          break;
        }
        case 8: {
          that.Q8Enter();
          break;
        }
        case 9: {
          that.Q9Enter();
          break;
        }
        case 10: {
          that.Q10Enter();
          break;
        }
      }
    }
    var nextDots = document.querySelectorAll(".next_dot");
    nextDots.forEach(ele => {
      ele.addEventListener("touchstart", e => {
        // if(ele.classList.contains('bird_click')){
        //   console.log('bird_click')
        //   //setTimeout(() => {
        //      callBack(ele);
        //   //}, 1000);
        // }else{
        //    callBack(ele);
        // }
        callBack(ele);
      });
    });

    //document.body.addEventListener("touchstart", e => {});
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
  overflow: hidden;
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
    z-index: 22;
    //height: 61vh;
    .option_card {
      z-index: 22;
      position: absolute;
      left: 6.93%;
      width: 130px;
      height: 55px;
      line-height: 55px;
      background: url("../../assets/img/music_test/option_card.png") no-repeat
        center/cover;
      border-radius: 10px;
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
      width: 200px;
      //width: 35.7vw;
      //height: 61vh;
      position: absolute;
      right: -20px;
      //top:401px;
      top: 30px;
    }
  }
  .wave {
    position: absolute;
    left: 0;
    z-index: 2;
    bottom: -7px;
    img {
      position: relative;
      z-index: 2;
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
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .flyto {
    right: -91%;
    top: -85%;
  }
  .f1 {
    left: 170%;
    top: 18%;
  }
  .f2 {
    left: 170%;
    top: -171%;
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
  .bird.fly {
    animation: fly 0.5s steps(2) 0s infinite both;
  }
  .bird.f1 {
    animation: fly 0.5s steps(2) 0s infinite both;
    left: 170%;
    top: 18%;
  }
  .bird.f2 {
    animation: fly 0.5s steps(2) 0s infinite both;
    left: 170%;
    top: -171%;
  }
  @keyframes bounce {
    60% {
      transform: translateX(-50%) translateY(-50px);
    }
    100% {
      transform: translateX(-50%) translateY(-20px);
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
    no-repeat right 0% bottom 0% ~"/" 77px 70px url("../../assets/img/music_test/grass2.png"),
    no-repeat right 0% bottom 0% ~"/" 100% 150px url("../../assets/img/music_test/wave.png");
  background-color: rgba(255, 194, 149, 1);
  .topic_card {
    background: url("../../assets/img/music_test/topic_card_b.png") no-repeat
      center/cover;
    // background: url("../../assets/img/music_test/topic_card.png") no-repeat
    //   center/cover;
    height: 180px;
    border-radius: 10px;
    .note {
      position: absolute;
      left: 50%;
      margin-left: -36px;
      bottom: 25px;
      font-size: 0;
      -webkit-tap-highlight-color: transparent;
      img {
        width: 72px;
        height: 72px;
        -webkit-tap-highlight-color: transparent;
      }
      //transition: transform 15s;
    }
    .note.playing {
      animation: rotate 15s;
      //transform: rotate(360deg);
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
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
      border-radius: 10px;
      .option_text {
        display: none;
        margin-left: 13%;
        font-size: 30px;
        font-family: PingFangSC-Medium;
        font-weight: bold;
        color: rgba(245, 150, 0, 1);
      }
      .option_img {
        position: absolute;
        //right: 25px;
        left: 50%;
        top: 50%;
        line-height: normal;
        transform: translateX(-50%) translateY(-50%);
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
.q2a {
  width: 47px !important;
}
.q2b {
  width: 74px !important;
}
.q8a {
  width: 84px !important;
}
.q8b {
  width: 82px !important;
}
.q9a {
  width: 82px !important;
}
.q9b {
  width: 86px !important;
}
.page.q8,
.page.qiaoji {
  .topic_card {
    background: url("../../assets/img/music_test/topic_card.png") no-repeat
      center/cover;
    height: 140px;
  }
  .text {
    top: 45% !important;
  }
}
.page.qiaoji {
  background: no-repeat 20.5% 0.2% ~"/" 68px 18px url("../../assets/img/music_test/cloud1.png"),
    no-repeat right 0% top 25.6% ~"/" 48px 22px url("../../assets/img/music_test/cloud2.png"),
    no-repeat left 11.6% top 33.2% ~"/" 69px 14px url("../../assets/img/music_test/cloud3.png"),
    no-repeat left 0% bottom 0% ~"/" 100% 150px url("../../assets/img/music_test/qj_cloud.png"),
    linear-gradient(0deg, rgba(255, 200, 136, 1) 0%, rgba(255, 140, 49, 1) 100%);
  background-color: rgba(255, 194, 149, 1);
  //background:linear-gradient(0deg,rgba(255,200,136,1) 0%,rgba(255,140,49,1) 100%);
}
//泡泡

body {
  height: 100vh;
  position: relative;
}
// .beat {
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: red;
//   position: absolute;
//   bottom: -30px;
// }
// .beat_up {
//   animation: up 7s linear forwards;
// }
// .beat.right {
//   background-color: blueviolet;
// }
// .beat.wrong {
//   background-color: gray;
// }
@keyframes up {
  0% {
    bottom: 0;
  }
  99% {
    //opacity: 1;
  }
  100% {
    bottom: 850px;
    //opacity: 0;
    display: none;
  }
}
.beat {
  position: absolute;
  bottom: -60px;
  transition: opacity 1.3s;
  img.o {
    width: 53px;
  }
  img.b {
    width: 78px;
    display: none;
  }
}
.beat_up {
  animation: up 7s linear forwards;
}
.beat.right {
  animation-play-state: paused;
  opacity: 0;
  img.o {
    display: none;
  }
  img.b {
    display: block;
  }
}
</style>

