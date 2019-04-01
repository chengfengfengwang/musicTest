<template>
  <div id="index">
    <Header></Header>
    <div id="indexBanner" class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide slide1"></div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Header from "./../../components/Header";
import BackTop from "./../../components/BackTop";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "index",
  components: {
    Header,
    BackTop
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      //loop: true
      pagination: {
        el: ".swiper-pagination",
        clickable :true,
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
</style>