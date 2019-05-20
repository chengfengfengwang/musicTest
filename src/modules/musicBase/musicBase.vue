<template>
  <div class="music_base">
    <div class="wrapper">
      <img src="./../../assets/img/music_base_content.png" alt>
      <div class="receive">
        <img src="./../../assets/img/receive_btn.png" alt class="receive_btn">
      </div>

      <div class="video_box first"></div>
      <div class="video_box second"></div>
    </div>
    <div class="download_wrapper" v-show="downloadShow" :style="{paddingBottom:isIphonex?'10px':'0px'}">
      <div class="download">
        <div class="icon_area">
          <img src="./../../assets/img/appicon.png" alt>
        </div>
        <div class="download_main">
          <div class="main_title">音乐壳</div>
          <div class="sub_title">上音乐壳，让孩子爱上音乐</div>
        </div>
        <div class="down_load_btn" id="downloadButton">点击下载</div>
        <div class="close_icon" @click="closeDownload">
          <img src="./../../assets/img/close.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { isIphonex, isWebview } from "./../../assets/util.js";
export default {
  data() {
    return {
      downloadShow: true,
      isIphonex: false
    };
  },
  created() {
    this.isIphonex = this.testIsIphonex();
  },
  mounted() {
      this.initShareInstall()
  },
  methods: {
    testIsIphonex() {
      if (typeof window !== "undefined" && window) {
        return (
          /iphone/gi.test(window.navigator.userAgent) &&
          window.screen.height >= 812
        );
      }
      return false;
    },
    closeDownload() {
      this.downloadShow = false;
      sessionStorage.setItem("closedDownloadShow", "true");
    },
    initShareInstall() {
      var data = ShareInstall.parseUrlParams(); //shareinstall.js中提供的工具函数，解析url中的所有查询参数
      data.channel = "index_mob";
      new ShareInstall(
        {
          appKey: "2KBKKFAK2E26FF",
          //可选项，微信中打开自定义遮罩层
          //shadow : function(){
          //  return "<div id='shareinstall_shadow' style='position:fixed;left:0;top:0;background:rgba(0,255,0,0.5);filter:alpha(opacity=50);width:100%;height:100%;z-index:10000;'></div>"
          // },
          /*可选参数，是否优先考虑下载app，以牺牲唤醒为代价*/
          //preferInstall:true,
          /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价*/
          //preferWakeup:true,
          /*可选参数，微信中直接跳下载*/
          //weChatdownload:true,
          onready: function() {
            //shareinstall已成功回调
            console.log("shareinstall已成功回调");
            var m = this,
              button = document.getElementById("downloadButton");
            button.style.visibility = "visible";

            //用户点击某个按钮时(假定按钮id为downloadButton)，安装app
            button.onclick = function() {
              m.install();
            };
          }
        },
        data
      );
    }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
}
.music_base{
background-color: #ffe9ac;
overflow: hidden;
}
.wrapper {
  position: relative;
  
  font-size: 0;
  margin-bottom: 52px;
  .receive {
    position: absolute;
    left: 18%;
    top: 24.2%;
    width: 128px;
    img {
      width: 100%;
    }
  }
  .video_box {
    width: 74%;
    height: 10%;
    border: 2px solid rgba(0, 0, 0, 1);
    border-radius: 14px;
    position: absolute;
  }
  .video_box.first {
    top: 40.7%;
    left: 50%;
    transform: translateX(-50%);
  }
  .video_box.second {
    bottom: 2.7%;
    left: 50%;
    transform: translateX(-50%);
  }
}
.download_wrapper {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background-color: #fff;
}
.download {
    position: relative;
  box-sizing: border-box;
  font-size: 12px;
  background-color: #fff;
  box-shadow: 0 -8px 6px -7px rgba(222, 222, 222, 0.75);
  padding: 10px 15px 10px 75px;
  z-index: 100;
  width: 100%;

  display: flex;
  align-items: center;
  .icon_area {
    position: absolute;
    left: 8px;
    bottom: 4px;
    //width: 168px;
    img {
      width: 58px;
    }
    //box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.07);
    // margin-right: 8px;
    // border-radius: 6px;
    // line-height: 40px;
    // height: 40px;
    // img {
    //   width: 40px;
    // }
  }
  .download_main {
    line-height: 16px;
    flex: 1;
    .main_title {
      font-family: PingFangSC-Regular;

      font-size: 15px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #646b80;
    }
    .sub_title {
      font-size: 13px;
      font-family: PingFangSC-Regular;
      color: #9ea7b4;
    }
  }
  .down_load_btn {
    position: absolute;
    right: 30px;
    top: 50%;
    margin-top: -17px;
    border-radius: 18px;
    width: 100px;
    height: 35px;
    background: linear-gradient(to right, #f7d166, #fcad7b);
    //box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.2);
    line-height: 35px;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
  }
  .close_icon {
    position: absolute;
    right: 0;
    top: 0;
    padding: 3px 5px;
    img {
      width: 10px;
    }
  }
}
</style>


