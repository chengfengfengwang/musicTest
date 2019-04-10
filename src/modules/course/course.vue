<template>
  <div id="console">
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
    <section class="introduction wrapper">
      <CourseCommonTitle style="margin:80px 0">
        <template v-slot:title_zh>课程简介</template>
        <template v-slot:title_en>Course Characteristics</template>
      </CourseCommonTitle>
      <div class="introduction_wrapper">
        <VideoBlock class="video_block">
          <template v-slot:cover>
            <img class="cover" src="../../assets/img/course_ukulele.jpeg" alt>
          </template>
          <template v-slot:video>
            <video id="play3" controls src="./../../assets/video/immusician-zhu.mp4"></video>
          </template>
        </VideoBlock>
        <div class="index_banner_main">
          <div class="title">《中国音乐学院音基考级一级课程》</div>
          <div class="brief_intro">
            <p>
              适用
              <span class="intro_b">6</span>岁及以上学习音乐的儿童
            </p>
            <p>
              乐理视唱练耳
              <span class="intro_b">16</span>课时+
              <span class="intro_b">8</span>个音乐常识小动画
            </p>
            <p>名师讲授+游戏互动练习+动画故事</p>
            <p>练习数据自动检测，课后智能推送相应练习，针对薄弱知识点强化练习</p>
            <p>课程附带考前模拟真题练习题库，确保学生考试通过。</p>
          </div>
          <div class="teacher">
            <div class="teacher_img">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554811174924&di=cb996372a6c78d2bcb3351da43e302fa&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fapp%2Fcapture%2Fiphone6p%2F20180330%2F1522392377657209.jpg"
                alt
              >
            </div>
            <div class="teacher_info">
              <div class="teacher_title">主讲老师：田园</div>
              <div
                class="teacher_intro"
              >美国波士顿大学音乐表演钢琴演奏专业硕士毕业，中国音乐学院音乐教育专业本科毕业，10年少儿音乐基础知识和钢琴教学经验，熟知国内外各大知名音乐考级体系。</div>
            </div>
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature_item">
          <img src="./../../assets/img/feature1.png" alt>
          <div>名师讲授</div>
        </div>
        <div class="feature_item">
          <img src="./../../assets/img/feature2.png" alt>
          <div>游戏互动</div>
        </div>
        <div class="feature_item">
          <img src="./../../assets/img/feature3.png" alt>
          <div>模拟题库</div>
        </div>
        <div class="feature_item">
          <img src="./../../assets/img/feature4.png" alt>
          <div>实时答疑</div>
        </div>
        <div class="feature_item">
          <img src="./../../assets/img/feature5.png" alt>
          <div>动画故事</div>
        </div>
        <div class="feature_item">
          <img src="./../../assets/img/feature6.png" alt>
          <div>一对一辅导</div>
        </div>
      </div>
    </section>
    <section class="outline wrapper">
      <CourseCommonTitle>
        <template v-slot:title_zh>课程大纲</template>
        <template v-slot:title_en>Course outline</template>
      </CourseCommonTitle>
      <div class="outline_row">
        <div class="outline_item">
          <img class="top_img" src="./../../assets/img/intro1.png" alt>
          <div class="outline_item_content" style="padding-bottom:30px">
            <div class="intro_list_wrapper">
              <div class="intro_li_title">乐理</div>
              <div class="intro_li_content">
                <p>学会5种常见音符.3种谱号，五线谱，四二拍；</p>
                <p>认低音do到高音do一个八度音名，唱名及音高位置。</p>
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">练耳</div>
              <div class="intro_li_content">
                <p>学会听辨一个八度音高；比较音高低及音符的长度；</p>
                <p>感知四二拍音乐律动。</p>
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">视唱</div>
              <div class="intro_li_content">
                <p>学会敲击单位拍，唱念节奏；跟四二拍旋律完整视唱。</p>
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">常识</div>
              <div class="intro_li_content">
                <p>了解3种键盘乐器，5种常见中外拉弦乐乐器，并听辨它们的音色。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="outline_item">
          <img class="top_img" src="./../../assets/img/intro2.png" alt>
          <div class="outline_item_content">
            <div class="intro_list_wrapper">
              <div class="intro_li_title">乐理</div>
              <div class="intro_li_content">
                <p>学会5种常见休止符，音符时值组合及节奏型；扩展更多高低音；学习c大调音阶，全音半音，大小二度，三度音程。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">练耳</div>
              <div class="intro_li_content">
                <p>学会听辨节奏型，全音半音，大小二度三度音程，旋律走向及更多音高的比较。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">视唱</div>
              <div class="intro_li_content">
                <p>学会视唱更多的旋律，节奏，音准，唱名，全面提升。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">常识</div>
              <div class="intro_li_content">
                <p>了解7种中外弹拨乐，十几种常见中外吹奏乐器，6种中外打击乐器，并听辨它们的音色。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="outline_item">
          <img class="top_img" src="./../../assets/img/intro3.png" alt>
          <div class="outline_item_content">
            <div class="intro_list_wrapper">
              <div class="intro_li_title">乐理</div>
              <div class="intro_li_content">
                <p>学会四三拍，3种附点音符及附点节奏；学习跳音，同音连线及力度，速度术语，音乐情绪；综合复习所有知识点。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">练耳</div>
              <div class="intro_li_content">
                <p>学会听辨两种常见拍号，附点节奏，力度，速度及音乐情绪，巩固旋律音高听辨。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">视唱</div>
              <div class="intro_li_content">
                <p>学会视唱四三拍附点节奏旋律，巩固所有旋律音高视唱。</p>
                <!-- <p>认低音do到高音do一个八度音名，唱名及音高位置。</p> -->
              </div>
            </div>
            <div class="intro_list_wrapper">
              <div class="intro_li_title">常识</div>
              <div class="intro_li_content">
                <p>了解10位中外著名音乐家以及他们的代表作品。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="catalogue">
      <div class="catalogue_wrapper">
        <CourseCommonTitle>
          <template v-slot:title_zh>课程目录</template>
          <template v-slot:title_en>Course catalogue</template>
        </CourseCommonTitle>
        <div class="catalogue_main">
          <div class="left_section">
            <div class="top">《乐理视唱练耳16课 》</div>
            <div class="bottom">
              <div class="bottom_left">
                <p>
                  <span class="index">01</span>快乐音符
                </p>
                <p>
                  <span class="index">02</span>掌中五线谱
                </p>
                <p>
                  <span class="index">03</span>音名与唱名
                </p>
                <p>
                  <span class="index">04</span>学习四二拍
                </p>
                <p>
                  <span class="index">05</span>旋律中的音高
                </p>
                <p>
                  <span class="index">06</span>不发声的休止符
                </p>
                <p>
                  <span class="index">07</span>音符时值与节奏
                </p>
                <p>
                  <span class="index">08</span>熟练高低音
                </p>
              </div>
              <div class="bottom_right">
                <p>
                  <span class="index">09</span>快乐音符
                </p>
                <p>
                  <span class="index">10</span>掌中五线谱
                </p>
                <p>
                  <span class="index">11</span>音名与唱名
                </p>
                <p>
                  <span class="index">12</span>学习四二拍
                </p>
                <p>
                  <span class="index">13</span>旋律中的音高
                </p>
                <p>
                  <span class="index">14</span>不发声的休止符
                </p>
                <p>
                  <span class="index">15</span>音符时值与节奏
                </p>
                <p>
                  <span class="index">16</span>熟练高低音
                </p>
              </div>
            </div>
          </div>
          <div class="middle_section">
            <img src="./../../assets/img/add.png" alt>
          </div>
          <div class="right_section">
            <div class="top">《音乐星球小动画8课》</div>
            <div class="bottom">
              <div class="bottom_left">
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">01</span>穿越键盘星球
                  </p>
                  <p class="p_sub_title">乐器之王钢琴，管风琴，手风琴</p>
                </div>
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">02</span>弦乐星球1号
                  </p>
                  <p class="p_sub_title">中西方拉弦乐小提琴、中提琴，二胡等</p>
                </div>
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">03</span>弦乐星球2号
                  </p>
                  <p class="p_sub_title">——中西方弹拨乐琵琶，古筝，竖琴等</p>
                </div>
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">04</span>吹奏乐星球1号
                  </p>
                  <p class="p_sub_title">——中西方吹奏乐长笛、单簧管、唢呐等</p>
                </div>
              </div>
              <div class="bottom_right">
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">05</span>吹奏乐星球2号
                  </p>
                  <p class="p_sub_title">——西方铜管乐大管、圆号、小号等</p>
                </div>
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">06</span>打击乐星球
                  </p>
                  <p class="p_sub_title">——中西方打击乐小军鼓、响板，锣等</p>
                </div>
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">07</span>西方音乐家星球
                  </p>
                  <p class="p_sub_title">——巴赫，莫扎特、贝多芬等</p>
                </div>
                <div class="lesson">
                  <p class="p_title">
                    <span class="index">08</span>中国音乐家星球
                  </p>
                  <p class="p_sub_title">——冼星海、王洛宾、聂耳等</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="remark wrapper">
      <CourseCommonTitle>
        <template v-slot:title_zh>用户评论</template>
        <template v-slot:title_en>User reviews</template>
      </CourseCommonTitle>
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
    <BackTop></BackTop>
    <Footer :aiLogoShow="false"></Footer>
  </div>
</template>

<script>
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import BackTop from "./../../components/BackTop";
import CommonTitle from "./../../components/CommonTitle";
import VideoBlock from "./../../components/Index/VideoBlock";
import CourseCommonTitle from "./../../components/Index/CourseCommonTitle";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "course",
  components: {
    Header,
    Footer,
    BackTop,
    CommonTitle,
    VideoBlock,
    CourseCommonTitle,
    Swiper
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
.introduction {
  .introduction_wrapper {
    display: flex;
    .video_block {
      //width: 790px;
      //flex-shrink: 0;
    }
    .index_banner_main {
      width: 54%;
      margin-left: 50px;
      .title {
        margin-left: -8px;
        margin-bottom: 10px;
        font-size: 30px;
        color: #ffa700;
      }
      .brief_intro {
        font-size: 16px;
        color: #666666;
        .intro_b {
          font-size: 24px;
          color: #000006;
        }
        & > p {
          position: relative;
          padding-left: 20px;
          line-height: 32px;
        }
      }
      .brief_intro > p:before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        left: 8px;
        top: 50%;
        margin-top: -4px;
        background: #ffaa06;
      }
      .teacher {
        margin-top: 30px;
        display: flex;
        align-items: center;
        background: #fff9f1;
        .teacher_img {
          flex-shrink: 0;
          width: 127px;
          height: 169px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .teacher_info {
          padding: 0 30px;
          .teacher_title {
            margin-bottom: 12px;
            font-size: 24px;
            color: #666666;
          }
          .teacher_intro {
            line-height: 28px;
            font-size: 14px;
            color: #666666;
          }
        }
      }
    }
  }
  .feature {
    display: flex;
    text-align: center;
    justify-content: space-around;
    background-color: #fff9f2;
    margin: 80px 0;
    padding: 45px 0;
    .feature_item {
      font-size: 20px;
      color: #666666;
      img {
        margin-bottom: 10px;
      }
    }
  }
}
.outline {
  margin-bottom: 80px;
  .outline_row {
    display: flex;
    justify-content: space-between;
    .outline_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top_img {
        z-index: 30;
      }
    }
    .outline_item_content {
      box-sizing: border-box;
      width: 350px;
      background-color: #fff8f2;
      border-radius: 10px 10px 6px 6px;
      padding: 30px 18px 10px 18px;
      margin-top: -30px;
      box-shadow: 0px 12px 21px -9px #f7cc8e;
      .intro_list_wrapper {
        margin-bottom: 25px;
        .intro_li_title {
          margin-bottom: 5px;
          font-family: PingFangSC-Medium;
          font-size: 20px;
          color: #fea803;
        }
        .intro_li_content {
          line-height: 22px;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #666666;
        }
      }
    }
  }
}
.catalogue {
  overflow: auto;
  .catalogue_wrapper {
    margin: 0 auto;
    max-width: 1200px;
  }

  background: #fff8f0;
  padding: 0  0 50px 0;
  .catalogue_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left_section {
      width: 500px;
      .top {
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #ffaa06;
        font-size: 24px;
        color: #ffffff;
        border-radius: 8px 8px 0 0;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #666666;
        background: #fff8f2;
        border-radius: 10px 10px 6px 6px;
        padding: 32px 60px 23px 60px;
        box-shadow: 0 14px 20px -9px #ffe2aa;
        .index {
          margin-right: 0.5em;
        }
        .bottom_left,
        .bottom_right {
          line-height: 28px;
        }
      }
    }
    .right_section {
      width: 500px;
      .top {
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #ffaa06;
        font-size: 24px;
        color: #ffffff;
        border-radius: 8px 8px 0 0;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #666666;
        background: #fff8f2;
        border-radius: 10px 10px 6px 6px;
        padding: 32px 30px 23px 30px;
        box-shadow: 0 14px 20px -9px #ffe2aa;
        .index {
          margin-right: 0.5em;
        }
        .bottom_left,
        .bottom_right {
          line-height: 28px;
        }
        .p_title {
          font-size: 16px;
          color: #666666;
        }
        .p_sub_title {
          font-size: 12px;
          color: #666666;
        }
      }
    }
    .middle_section {
      width: 84px;
      height: 84px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.6;
      background: #ffe9d6;
      border-radius: 50%;
    }
  }
}
.remark {
  margin: 120px auto;
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
</style>