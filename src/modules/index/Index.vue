<template>
  <div id="index">
    <Header></Header>
    <section id="indexBanner" class="swiper-container">
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
    <section class="my_hr"></section>
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
        <video controls src="./../../assets/video/immusician-zhu.mp4"></video>
        <div class="video_cover"></div>
      </div>
    </section>

    <section class="section_c wrapper">
      <div class="video_box">
        <video controls src="./../../assets/video/immusician-zhu.mp4"></video>
        <div class="video_cover"></div>
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
        <video controls src="./../../assets/video/immusician-zhu.mp4"></video>
        <div class="video_cover"></div>
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
    <div>xxx</div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from "./../../components/Header";
import BackTop from "./../../components/BackTop";
import CommonTitle from "./../../components/CommonTitle";
import VideoHoverPlay from "./../../components/Index/VideoHoverPlay";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "index",
  components: {
    Header,
    BackTop,
    CommonTitle,
    VideoHoverPlay
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      //loop: true
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 650px;
  .slide1 {
    background: url("./../../assets/img/banner_index_1.png") no-repeat center;
    background-size: cover;
  }
}
.statistics {
  margin: 80px auto 96px auto;
  display: flex;
  justify-content: space-between;
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
    .data {
      font-family: SourceHanSansCN-Medium;
      font-size: 43px;
      color: #ffaa06;
    }
    .item {
      font-family: SourceHanSansCN-Normal;
      font-size: 16px;
      color: #999999;
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
    margin-bottom: 80px;
    .main_title {
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
  .content {
    font-family: SourceHanSansCN-Normal;
    font-size: 20px;
    color: #666666;
  }
}

.video_box {
  position: relative;
  video {
    display: block;
    width: 660px;
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
    background: url("./../../assets/img/about_banner.png") no-repeat center;
    background-size: cover;
  }
}

.section_c {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 123px;
}
.video_container {
  width: 100%;
  //height: 540px;
  display: flex;
  justify-content: space-between;
  .video_row{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    &:last-child{
      margin-right: 0
    }
    .inner_row{
      display: flex;
    }
  }
}
</style>