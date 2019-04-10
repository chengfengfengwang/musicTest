<template>
  <div>
    <Header></Header>
    <section class="introduction common_wrapper">
      <CourseCommonTitle>
        <template v-slot:title_zh>课程大纲</template>
        <template v-slot:title_en>Course Introduction</template>
      </CourseCommonTitle>
      <div class="introduction_item">
        <img class="top_img" src="./../../assets/mob_assets/img/mob_intro1.png" alt>
        <div class="introduction_item_content">
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
      <div class="introduction_item">
        <img class="top_img" src="./../../assets/mob_assets/img/mob_intro2.png" alt>
        <div class="introduction_item_content">
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
      <div class="introduction_item">
        <img class="top_img" src="./../../assets/mob_assets/img/mob_intro3.png" alt>
        <div class="introduction_item_content">
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
    </section>
    <section class="catalogue common_wrapper">
      <CourseCommonTitle>
        <template v-slot:title_zh>课程目录</template>
        <template v-slot:title_en>Course catalogue</template>
      </CourseCommonTitle>
      <div class="catalogue_main">
        <div class="top_section">
          <div class="title">《乐理视唱练耳16课》</div>
          <div class="content">
            <div class="content_left">
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
            <div class="content_right">
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
        <div class="bottom_section">
          <div class="title">《音乐星球小动画8课》</div>
          <div class="content">
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
    </section>
    <Footer :aiLogoShow="false"></Footer>
  </div>
</template>
<script>
import Header from "../../components/mob/Header";
import Footer from "../../components/mob/Footer";
import CourseCommonTitle from "../../components/mob/CourseCommonTitle";
export default {
  components: {
    Header,
    Footer,
    CourseCommonTitle
  }
};
</script>
<style lang="less" scoped>
.common_wrapper {
  margin: 0 15px;
}
.introduction_item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;
  max-width: 500px;
  .top_img {
    width: 100%;
    z-index: 30;
  }
}
.introduction_item:last-child{
  margin-bottom: 40px
}
.introduction_item_content {
  box-sizing: border-box;
  width: 90%;
  background-color: #fff8f2;
  border-radius: 10px 10px 6px 6px;
  padding: 30px 18px 10px 18px;
  margin-top: -30px;
  .intro_list_wrapper {
    margin-bottom: 25px;
    .intro_li_title {
      margin-bottom: 5px;
      font-family: PingFangSC-Medium;
      font-size: 15px;
      color: #fea803;
    }
    .intro_li_content {
      line-height: 22px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #666666;
    }
  }
}
.catalogue {
  .catalogue_main {
    max-width: 500px;
    margin: 0 auto;
    .top_section {
      display: flex;
      .title {
        writing-mode: vertical-lr;
        line-height: 50px;
        width: 50px;
        background:#ffc058;
        //background-image: linear-gradient(-179deg, #ffc058 0%, #ff982b 100%);
        box-shadow: 4px 2px 11px -3px #ffb366;
        border-radius: 8px 8px 0 0;
        font-size: 15px;
        color: #ffffff;
        text-align: center;
        letter-spacing: 1px;
      }
      .content {
        flex-grow: 1;
        padding: 18px 0 18px 35px;
        display: flex;
        background: #fffbf9;
        font-size: 12px;
        color: #666666;
        .content_left,.content_right{
          line-height: 25px;
        }
        .content_right{
              margin-left: 45px;
        }
      }
    }
    .bottom_section {
      display: flex;
      .title {
        writing-mode: vertical-lr;
        line-height: 50px;
        width: 50px;
        background-image: linear-gradient(-179deg, #ffc058 0%, #ff982b 100%);
        box-shadow: 4px 2px 11px -3px #ffb366;
        //border-radius: 8px 8px 0 0;
        font-size: 15px;
        color: #ffffff;
        text-align: center;
        letter-spacing: 1px;
      }
      .content {
        flex-grow: 1;
        padding: 18px 0 18px 35px;
        background: #FBF2E9;
        .lesson {
          margin-bottom: 12px;
          .p_title {
            margin-bottom: 5px;
            font-size: 12px;
            color: #666666;
          }
          .p_sub_title {
            font-size: 10px;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>

