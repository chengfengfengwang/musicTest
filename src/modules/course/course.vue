<template>
  <div id="console">
    <Header></Header>
    <section class="course_index_banner">
      <div class="wrapper">
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
export default {
  name: "course",
  components: {
    Header,
    Footer,
    BackTop,
    CommonTitle
  }
};
</script>

<style lang="less" scoped>
.course_index_banner {
  background-color: #fff3dc;
  height: 568px;
  .wrapper {
    display: flex;
    .index_banner_main {
      .title {
        font-size: 36px;
        color: #ffa700;
        margin: 10px 0 50px -.5em;
      }
      .brief_intro {
        font-size: 16px;
        color: #666666;
        line-height: 32px;
      }
    }
  }
}
</style>