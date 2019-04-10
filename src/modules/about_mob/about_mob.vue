<template>
  <div class="about_mob">
    <Header></Header>
    <div class="banner"></div>
    <section class="main common_wrapper">
      <div class="section_title">
        <span class="title_zh">关于我们</span>
        <span class="title_en">ABOUT US</span>
      </div>
      <div class="company">
        <div class="title">北京音悦荚科技有限责任公司</div>
        <div class="introduction">
          音乐壳隶属于北京音乐荚科技有限公司，因一群热爱音乐、怀揣音乐梦想的人而生！致力于智能互动、数字
          <br>化在线音乐教学的创新应用。
        </div>
        <div class="contact_way">
          <div>
            <img src="./../../assets/img/icon_phone.png" alt>联系电话：010-81708781
          </div>
          <div>
            <img src="./../../assets/img/icon_email.png" alt>联系邮箱：service@immusician.com
          </div>
          <div>
            <img src="./../../assets/img/icon_address.png" alt>联系地址：北京市昌平区回龙观西大街龙冠商务中心
          </div>
        </div>
        <div class="logo">
          <img src="./../../assets/img/logo_yyj.png" alt>
        </div>
      </div>
    </section>
    <Footer class="about_footer"></Footer>
  </div>
</template>
<style lang="less" scoped>
.about_mob{
    position:relative;
    //height: 100vh;
    //min-height:100vh;
    .about_footer{
        box-sizing:border-box;
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
    }
}
.common_wrapper {
  margin: 0 15px;
}
.banner {
  width: 100%;
  height: 250px;
  background: url("../../assets/mob_assets/img/about_banner.png") no-repeat
    center;
  background-size: cover;
}
.main {
  margin: 21px 15px;
  padding-bottom: 86px;
}
.section_title {
  position: relative;
  padding-left: 8px;
  margin-bottom: 30px;
  .title_zh {
    margin-right: 3px;
    font-size: 18px;
    color: #333333;
  }
  .title_en {
    font-family: SourceHanSansCN-Regular;
    font-size: 10px;
    color: #333333;
  }
}
.section_title::before {
  content: " ";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 3px;
  height: 70%;
  background-color: #ffaa06;
}
.company {
    position: relative;
  .title {
      margin-bottom: 5px;
    font-size: 14px;
    color: #333333;
  }
  .introduction {
    font-size: 11px;
    color: #666666;
    margin-bottom: 12px;
  }
  .contact_way {
    font-family: SourceHanSansCN-Regular;
    font-size: 12px;
    color: #333333;
    line-height: 20px;
    &>div{
        display: flex;
        align-items: center;
        img{
            margin-right:5px;
        }
    }
  }
  .logo{
      position: absolute;
          right: 32px;
    top: -57px;
      img{
          width: 76px;
      }
  }
}
</style>

<script>
import Header from "../../components/mob/Header";
import Footer from "../../components/mob/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

