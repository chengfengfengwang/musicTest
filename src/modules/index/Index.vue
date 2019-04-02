<template>
  <div id="index">
    <Header></Header>
    <section id="indexBannerSwiper" class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide slide1"></div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
    </section>
    <section class="statistics wrapper">
      <div class="item_box">
        <div class="data">37050</div>
        <div class="item">毕业学员</div>
      </div>
      <div class="item_box">
        <div class="data">100000+</div>
        <div class="item">用户数量</div>
      </div>
      <div class="item_box">
        <div class="data">1200h+</div>
        <div class="item">课程时长</div>
      </div>
    </section>
    <section class="my_hr" style="margin-bottom:35px"></section>
    <section class="section_c wrapper">
      <div class="section_intro">
        <div class="section_title_c">
          <div class="main_title">
            <span class="title_zh">音乐理论基础</span>
            <span class="title_en">/ Music Basis</span>
          </div>
          <div class="sub_title">699元考级保过</div>
          <div class="title_line"></div>
        </div>
        <div class="content">
          <p>15小时兴趣性学习，为考级保驾护航；</p>
          <p>18位明星导师精心设计，为考级量身定制；</p>
          <p>AI技术赋能，比音乐老师耳朵更灵敏，高质高</p>
        </div>
      </div>
      <div class="video_box">
        <video id="play1" controls src="./../../assets/video/immusician-zhu.mp4"></video>
        <div class="video_cover music_basis">
          <img class="play" @click="play('play1',$event)" src="./../../assets/img/play.png" alt>
        </div>
      </div>
    </section>

    <section class="section_c wrapper">
      <div class="video_box">
        <video id="play2" controls src="./../../assets/video/immusician-zhu.mp4"></video>
        <div class="video_cover djembe">
          <img class="play" @click="play('play2',$event)" src="./../../assets/img/play.png" alt>
        </div>
      </div>
      <div class="section_intro">
        <div class="section_title_c">
          <div class="main_title">
            <span class="title_zh">非洲鼓</span>
            <span class="title_en">/ Djembe</span>
          </div>
          <div class="sub_title">80%妈妈给孩子音乐启蒙的第一课</div>
          <div class="title_line"></div>
        </div>
        <div class="content">
          <p>国内外名师双课堂，主课+辅导课全跟踪；</p>
          <p>26课时技巧+非洲鼓文化故事，28课时快速进阶；</p>
          <p>30天轻松组建家庭小乐队</p>
        </div>
      </div>
    </section>

    <section class="section_c wrapper">
      <div class="section_intro">
        <div class="section_title_c">
          <div class="main_title">
            <span class="title_zh">尤克里里</span>
            <span class="title_en">/ Ukulele</span>
          </div>
          <div class="sub_title">孩子爱上音乐的第一件乐器</div>
          <div class="title_line"></div>
        </div>
        <div class="content">
          <p>名师授课，班级辅导，保证学会；</p>
          <p>智能游戏化教学系统让孩子5分钟上手《小星星》</p>
          <p>8分钟上手《生日歌》；</p>
          <p>30天，成为班级音乐小明星</p>
        </div>
      </div>
      <div class="video_box">
        <video id="play3" controls src="./../../assets/video/immusician-zhu.mp4"></video>
        <div class="video_cover ukulele">
          <img class="play" @click="play('play3',$event)" src="./../../assets/img/play.png" alt>
        </div>
      </div>
    </section>

    <section>
      <CommonTitle>此刻他们正在学</CommonTitle>
      <div class="video_container">
        <div class="video_row">
          <VideoHoverPlay
            video="http://s.immusician.com/static/website/videos/3.mp4"
            width="340"
            height="540"
          >
            <img class="play_cover" src="./../../assets/img/learning1.png" alt>
          </VideoHoverPlay>
        </div>
        <div class="video_row">
          <VideoHoverPlay
            video="http://s.immusician.com/static/videos/immusician-zhu.mp4"
            name="《小星星》"
            author="爱丽丝"
            time="学习7天"
            width="490"
            height="259"
          >
            <img class="play_cover" src="./../../assets/img/learning2.png" alt>
          </VideoHoverPlay>
          <VideoHoverPlay
            video="http://s.immusician.com/static/videos/immusician-zhu.mp4"
            name="《小星星》"
            author="爱丽丝"
            time="学习7天"
            width="490"
            height="259"
          >
            <img class="play_cover" src="./../../assets/img/learning3.png" alt>
          </VideoHoverPlay>
        </div>
        <div class="video_row">
          <VideoHoverPlay
            video="http://s.immusician.com/static/videos/immusician-zhu.mp4"
            name="《小星星》"
            author="爱丽丝"
            time="学习7天"
            width="490"
            height="259"
          >
            <img class="play_cover" src="./../../assets/img/learning4.png" alt>
          </VideoHoverPlay>
          <div class="inner_row">
            <VideoHoverPlay
              video="http://s.immusician.com/static/videos/immusician-zhu.mp4"
              name="《小星星》"
              author="爱丽丝"
              time="学习7天"
              width="490"
              height="259"
            >
              <img class="play_cover" src="./../../assets/img/learning5.png" alt>
            </VideoHoverPlay>
            <VideoHoverPlay
              video="http://s.immusician.com/static/videos/immusician-zhu.mp4"
              name="《小星星》"
              author="爱丽丝"
              time="学习7天"
              width="490"
              height="259"
            >
              <img class="play_cover" src="./../../assets/img/learning6.png" alt>
            </VideoHoverPlay>
          </div>
        </div>
        <div class="video_row">
          <VideoHoverPlay
            video="http://s.immusician.com/static/videos/immusician-zhu.mp4"
            name="《小星星》"
            author="爱丽丝"
            time="学习7天"
            width="490"
            height="259"
          >
            <img class="play_cover" src="./../../assets/img/learning7.png" alt>
          </VideoHoverPlay>
        </div>
      </div>
    </section>
    <section>
      <CommonTitle>用户评论</CommonTitle>
      <div class="remark_container wrapper">
        <div id="remarkSwiper" class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in remarkArr" :key="item">
              <img :src="item" alt>
            </div>
          </div>

          <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>-->
        </div>
        <div @click="remarkSwiperNext" class="swiper-button-next">
          <img src="./../../assets/img/arrow.png" alt>
        </div>
        <div @click="remarkSwiperPrev" class="swiper-button-prev">
          <img src="./../../assets/img/arrow.png" alt>
        </div>
      </div>
    </section>
    <section>
      <CommonTitle>我们向您承诺</CommonTitle>
      <div class="promise_row wrapper">
        <div class="promise_item">
          <div class="promise_icon">
            <img src="./../../assets/img/promise_money.png" alt>
          </div>
          <div class="item">退款承诺</div>
          <div class="detail">若您对课程或服务不满意，并且满足退款条件，可向我们提出“全额退款”申请。</div>
        </div>
        <div class="promise_item">
          <div class="promise_icon">
            <img src="./../../assets/img/promise_service.png" alt>
          </div>
          <div class="item">服务承诺</div>
          <div class="detail">学员购买课程以后，即成为音乐壳的VIP学员，我们将向每一位学员保证服务水平。</div>
        </div>
        <div class="promise_item">
          <div class="promise_icon">
            <img src="./../../assets/img/promise_teacher.png" alt>
          </div>
          <div class="item">师资承诺</div>
          <div class="detail">我们承诺AI音乐学院的师资团队来自国内顶尖名师，保证教师的优质教学水平。</div>
        </div>
      </div>
    </section>
    <section class="my_hr"></section>
    <section>
      <CommonTitle>战略合作伙伴</CommonTitle>
      <div class="coopetation">
        <img src="./../../assets/img/cooperation_logos.png" alt>
      </div>
    </section>
    <BackTop></BackTop>
    <Footer :aiLogoShow="false"></Footer>
  </div>
</template>

<script>
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import BackTop from "./../../components/BackTop";
import CommonTitle from "./../../components/CommonTitle";
import VideoHoverPlay from "./../../components/Index/VideoHoverPlay";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "index",
  components: {
    Header,
    Footer,
    BackTop,
    CommonTitle,
    VideoHoverPlay
  },
  data() {
    return {
      remarkArr: []
    };
  },
  created() {
    for (var i = 4; i < 11; i++) {
      var str = require(`./../../assets/img/remark${i}.png`);
      this.remarkArr.push(str);
    }
    this.$nextTick(() => {
      this.initRemarkSwiper();
    });
  },
  mounted() {
    this.initBannerSwiper();
  },
  methods: {
    initBannerSwiper() {
      var mySwiper = new Swiper("#indexBannerSwiper", {
        direction: "horizontal",
        //loop: true
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    },
    initRemarkSwiper() {
      this.mySwiper = new Swiper("#remarkSwiper", {
        direction: "horizontal",
        //initialSlide :1,
        loop: true,
        slidesPerView: 4,
        //centeredSlides: true,
        spaceBetween: 0
      });
    },
    remarkSwiperNext() {
      this.mySwiper.slideNext();
    },
    remarkSwiperPrev() {
      this.mySwiper.slidePrev();
    },
    play(id, e) {
      console.log(id);
      console.log(e);
      var parent = e.target.parentNode;
      parent.style.display = "none";
      document.querySelector(`#${id}`).play();
      console.log(e.target.parentNode);
    }
  }
};
</script>

<style lang="less" scoped>
#indexBannerSwiper.swiper-container {
  width: 100%;
  height: 650px;
  .slide1 {
    background: url("./../../assets/img/banner_index_1.png") no-repeat center;
    background-size: cover;
  }
}
#remarkSwiper.swiper-container {
  width: 1044px;
  margin: 0 auto;
  //height: 335px;
  height: 370px;
  //padding: 0 30px;
  display: flex;
  justify-content: space-between;

  .swiper-slide {
    text-align: center;
    img {
      box-shadow: 0px 13px 20px 0px rgba(255, 194, 74, 0.28);
      //box-shadow: 5px 0px 10px 10px #94ffc24a;
    }
  }
}
.remark_container {
  position: relative;
  .swiper-button-next {
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -24px;
    width: 48px;
    height: 48px;
    background: #ffe4bd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 16px;
      transform: rotate(180deg);
    }
  }
  .swiper-button-prev {
    position: absolute;
    left: 0px;
    top: 50%;
    width: 48px;
    height: 48px;
    margin-top: -24px;
    background: #ffe4bd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 16px;
      transform: rotate(360deg);
    }
  }
}
.statistics {
  margin: 80px auto 96px auto;
  display: flex;
  justify-content: space-between;
  cursor: auto;
  .item_box {
    width: 300px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0 12px 26px 0 rgba(149, 149, 149, 0.11);
    border-radius: 6px;
    transition: all 0.3s;
    .data {
      font-family: SourceHanSansCN-Medium;
      font-size: 43px;
      color: #ffaa06;
      transition: all 0.3s;
    }
    .item {
      font-family: SourceHanSansCN-Normal;
      font-size: 16px;
      color: #999999;
      transition: all 0.3s;
    }
    &:hover {
      background: #ffc531;
      box-shadow: 0 11px 26px 0 rgba(149, 149, 149, 0.11);
      .data,
      .item {
        color: #fff;
        cursor: default;
      }
    }
  }
}
.my_hr {
  width: 100%;
  height: 10px;
  background-color: #fafafa;
}
.section_intro {
  width: 445px;
  .section_title_c {
    position: relative;
    margin-bottom: 80px;
    .main_title {
      margin-bottom: 16px;
      .title_zh {
        font-family: SourceHanSansCN-Medium;
        font-size: 48px;
        color: #333333;
      }
      .title_en {
        font-family: SourceHanSansCN-Light;
        font-size: 22px;
        color: #333333;
      }
    }
    .sub_title {
      margin-bottom: 15px;
      font-family: SourceHanSansCN-Regular;
      font-size: 24px;
      color: #666666;
    }
    .title_line {
      width: 90px;
      height: 4px;
      background: #ffaa06;
    }
  }
  .section_title_c::before {
    content: "";
    width: 129px;
    height: 129px;
    background-color: #ffe8d6b3;
    opacity: 0.5;
    border-radius: 50%;
    position: absolute;
    left: -17px;
    top: -30px;
  }
  .content {
    font-family: SourceHanSansCN-Normal;
    font-size: 20px;
    color: #666666;
    line-height: 34px;
    font-weight: 300;
    letter-spacing: 1px;
  }
}

.video_box {
  position: relative;
  width: 660px;
  video {
    display: block;
    width: 100%;
    //height: 350px;
    border: none;
    outline: none;
  }

  .video_cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      cursor: pointer;
      transform: translate(-50%, -50%);
    }
  }
  .video_cover.music_basis {
    background: url("./../../assets/img/course_music_basis.png") no-repeat
      center;
    background-size: cover;
  }
  .video_cover.djembe {
    background: url("./../../assets/img/course_djembe.png") no-repeat center;
    background-size: cover;
  }
  .video_cover.ukulele {
    background: url("./../../assets/img/course_ukulele.jpeg") no-repeat center;
    background-size: cover;
    height: 101%;
    top: -2px;
  }
}

.section_c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 123px;
}
.video_container {
  width: 100%;
  //height: 540px;
  display: flex;
  justify-content: space-between;
  .video_row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    .inner_row {
      display: flex;
    }
  }
}
.promise_row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  .promise_item {
    width: 276px;
    text-align: center;
    .promise_icon {
      img {
        width: 90px;
      }
    }
    .item {
      font-family: SourceHanSansCN-Medium;
      font-size: 26px;
      color: #636363;
      margin: 10px 0 14px 0;
    }
    .detail {
      font-family: SourceHanSansCN-Regular;
      font-size: 12px;
      color: #636363;
      letter-spacing: 1.19px;
    }
  }
}
.coopetation {
  margin-bottom: 100px;
  text-align: center;
  background-color: #fbf7f1;
  img {
    width: 100%;
  }
}
</style>