<template>
  <div id="aiCourseList">
    <!-- <div class="top_menu">
      <div class="top_menu_item active">{{obj.course_type}}</div>
      <div class="top_menu_item">尤克里里中级</div>
    </div>-->
    <Loading v-show="loadingShow"/>
    <div class="page_title">
      <div class="title">
        <img class="left" src="../../assets/img/ai/title_d.png" alt>
        <span class="title_content">{{obj.title}}</span>
        <img class="right" src="../../assets/img/ai/title_d.png" alt>
      </div>
      <div class="sub_title">{{obj.sub_title}}</div>
    </div>
    <div class="section" v-for="(item,index) in obj.section_list" :key="index">
      <div class="level">LV{{index+1}}</div>
      <div class="section_title">
        <div class="title">{{item.title}}</div>
      </div>
      <div class="line">
        <div class="round left"></div>
        <div class="round right"></div>
        <span v-for="(n,index) in 100" :key="index">-</span>
      </div>
      <div class="section_content">
        <div class="content_item" v-for="(lesson,lesson_index) in item.content" :key="lesson_index">
          <div class="item_title">{{lesson.title}}</div>
          <div class="item_content_wrapper">
            <div
              class="item_content"
              v-for="(lesson_content,lesson_content_index) in lesson.list"
              :key="lesson_content_index"
            >{{lesson_content}}</div>
          </div>
        </div>
        <!-- <div class="content_item">
          <div class="item_title">第一课：认识尤克里里并摆好pose</div>
          <div class="item_content_wrapper">
            <div class="item_content">1.认识尤克里里各部位构造</div>
            <div class="item_content">1.认识尤克里里各部位构造</div>
            <div class="item_content">1.认识尤克里里各部位构造</div>
          </div>
        </div>
        <div class="content_item">
          <div class="item_title">第一课：认识尤克里里并摆好pose</div>
          <div class="item_content_wrapper">
            <div class="item_content">1.认识尤克里里各部位构造</div>
            <div class="item_content">1.认识尤克里里各部位构造</div>
          </div>
        </div>
        <div class="content_item">
          <div class="item_title">第一课：认识尤克里里并摆好pose</div>
          <div class="item_content_wrapper">
            <div class="item_content">1.认识尤克里里各部位构造</div>
            <div class="item_content">1.认识尤克里里各部位构造</div>
            <div class="item_content">1.认识尤克里里各部位构造</div>
            <div class="item_content">1.认识尤克里里各部位构造</div>
          </div>
        </div>-->
      </div>
      <!-- <div class="round"></div> -->
      <!-- <div>
          <img src="" alt="">
      </div>-->
    </div>
  </div>
</template>
<script>
import Loading from "./../../components/Loading";
var obj = {
  course_type: "尤克里里初级",
  title: "尤克里里初级必修课",
  sub_title: "25节小白必学课＋21天训练营＋1年督学",
  section_list: [
    {
      title: "准备好演奏你人生的第一首歌了吗",
      content: [
        {
          title: "第一课：认识尤克里里并摆好pose",
          list: ["1.认识尤克里里各部位构造", "2.掌握尤克里里正确持琴姿势"]
        },
        {
          title: "第二课：把音调准，这很重要",
          list: [
            "1.了解为什么要给尤克里里调音",
            "2.如何利用智能化的方式轻松调音"
          ]
        },
        {
          title: "第三课：拿下世界名曲《小星星》",
          list: [
            "1.学习右手拨弦的正确方法",
            "2.边玩游戏边学会弹奏《小星星》",
            "3.课后练习"
          ]
        },
        {
          title: "第四课：史上最详细的按弦方法",
          list: [
            "1.为什么用指尖来按弦",
            "2.为什么要靠近品丝来按弦",
            "3.为什么手指不能折指",
            "4.为什么手指要垂直来按"
          ]
        },
        {
          title: "第五课：今后我也是有“谱”的人",
          list: ["1.学会看懂四线谱", "2.如何进行左右手配合弹奏", "3.课后练习"]
        },
        {
          title: "第六课：完整版《小星星》走起",
          list: ["1.跟着四线谱来弹奏完整的《小星星》", "课后练习"]
        }
      ]
    },
    {
      title: "节奏是音乐的灵魂",
      content: [
        {
          title: "第七课：感受音乐的灵魂—节奏",
          list: [
            "1.什么是节奏",
            "2.什么是八分音符.什么是二分音符.他们之间有什么关系",
            "3.课后练习"
          ]
        },
        {
          title: "第八课：“我喜欢你”是啥节奏",
          list: ["1.跟着四线谱弹奏“我喜欢你”的节奏", "2.课后练习"]
        },
        {
          title: "第九课：“新年倒计时”是啥节奏",
          list: ["1.跟着四线谱弹奏“新年倒计时”的节奏", "2.课后练习"]
        },
        {
          title: "第十课：“群主发红包“是啥节奏",
          list: ["1.跟着四线谱弹奏“群主发红包”的节奏", "2.课后练习"]
        }
      ]
    },
    {
      title: "开始弹唱",
      content: [
        {
          title: "第十一课：最温柔的弹奏技巧—琶音",
          list: ["1.学习琶音弹奏技巧", "2.课后练习"]
        },
        {
          title: "第十二课：｜弹尤克里里也是先选C",
          list: ["1.和弦是什么", "2.如何看懂和弦图", "3.课后练习"]
        },
        {
          title: "第十三课：弹唱《两只老虎》",
          list: ["1.	如何看着弹唱曲谱边弹边唱《两只老虎》", "2.课后练习"]
        },
        {
          title: "第十四课：C—Am",
          list: ["1.学习Am和弦", "2.如何进行C和Am的转换", "3.课后练习"]
        },
        {
          title: "第十五课：弹唱《尤克里里之歌》",
          list: ["1.如何看着弹唱曲谱边弹边唱《尤克里里之歌》", "2.课后练习"]
        },
        {
          title: "第十六课：C—Am—F",
          list: ["1.学习F和弦", "2.如何进行C和Am和F的转换", "3.课后练习"]
        },
        {
          title: "第十七课：弹唱《尤克里里之歌》",
          list: ["1.如何看着弹唱曲谱边弹边唱《我愿意》", "2.课后练习"]
        },
        {
          title: "第十八课：C—Am—F—G7",
          list: ["1.学习G7和弦", "2.如何进行C和Am和F和G7的转换", "3.课后练习"]
        },
        {
          title: "第十九课：弹唱《you are my sunshine》",
          list: [
            "1.如何看着弹唱曲谱边弹边唱《you are my sunshine》",
            "2.课后练习"
          ]
        },
        {
          title: "第二十课：扫弦弹奏太cool了",
          list: ["1.学习扫弦弹奏技巧", "2.课后练习"]
        },
        {
          title: "第二十一课：扫弦弹唱《imagine》",
          list: ["1.如何看着弹唱曲谱用扫弦边弹边唱", "2.课后练习"]
        },
        {
          title: "第二十二课：分解弹奏太好听了",
          list: ["1.学习二指法分解弹奏方法", "2.课后练习"]
        },
        {
          title: "第二十三课：分解弹奏太太好听了",
          list: ["1.	学习四分音符分解弹奏歌曲《找自己》", "2.课后练习"]
        },
        {
          title: "第二十四课：分解弹奏太太太好听了",
          list: ["1.学习八分音符分解弹奏歌曲《imagine》", "2.课后练习"]
        },
        {
          title: "第二十五课：毕业考试《小手拉大手》",
          list: [
            "1.	综合运用所学的C—Am—F—G7和弦以及琶音.扫弦.分解弹奏《小手拉大手》",
            "2.课后练习"
          ]
        }
      ]
    }
  ]
};
export default {
  data() {
    return {
      obj: {},
      loadingShow: true,
      course_ids: ""
    };
  },
  components: {
    Loading
  },
  mounted() {
    console.log(location.href);
    console.log(this.$util.getQueryVariable("course_ids"));
    this.course_ids = this.$util.getQueryVariable("course_ids");
    this.get();
  },
  methods: {
    get() {
      this.loadingShow = true;
      //var url = 'http://192.168.1.171:22222/v3/course/catalog?course_ids=[168,120,119]'
      var url = `http://iguitar.immusician.com:2525/v3/course/catalog?course_ids=${
        this.course_ids
      }`;
      //var url = `http://192.168.1.171:22222/v3/course/catalog?course_ids=${this.course_ids}`
      console.log(url);
      this.axios
        .get(url)
        .then(res => {
          var res = res.data;
          this.loadingShow = false;
          if (res.data && res.data.length > 0) {
            this.obj = res.data[0];
          } else {
            alert("无相关数据");
          }
        })
        .catch(() => {
          alert("请求出错");
        });
    }
  }
};
</script>

<style lang="less" scoped>
#aiCourseList {
  background-color: #2f1941;
  color: #fff;
  overflow: hidden;
}
.top_menu {
  width: 220px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 20px auto;
  color: #fff;
  display: flex;
  .top_menu_item {
    width: 50%;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular;
  }
  .top_menu_item.active {
    background: linear-gradient(
      270deg,
      rgba(94, 83, 224, 1) 0%,
      rgba(156, 98, 224, 1) 100%
    );
    border-radius: 15px;
  }
}
.page_title {
  width: 607px;
  margin: 20px auto;
  background: url("./../../assets/img/ai/title_bg.png") no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  overflow: auto;
  .title {
    margin: 15px auto;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    .title_content {
      margin: 0 8px;
    }
    img {
      width: 30px;
    }
    img.right {
      transform: rotate(180deg);
    }
  }
  .sub_title {
    margin: 15px auto;
    width: 300px;
    height: 25px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    font-size: 13px;
    line-height: 25px;
  }
}
.section {
  position: relative;
  width: 607px;
  margin: 20px auto;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  //border:1px solid rgba(94,83,224,0.71);
  //border-image:linear-gradient(180deg, rgba(94,83,224,0.71), rgba(156,98,224,1)) 1 1;
  .level {
    position: absolute;
    left: 22px;
    top: 0;
    width: 30px;
    height: 43px;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #fff;
    text-align: center;
    background: url("./../../assets/img/ai/level.png") no-repeat center;
    background-size: 100% 100%;
  }
  .section_title {
    //border-bottom: 1px dashed rgba(151, 151, 151, 1);
    .title {
      background: url("./../../assets/img/ai/section_title_bg.png") no-repeat
        center;
      background-size: 100% 100%;
      width: 323px;
      height: 33px;
      margin: 20px auto;

      text-align: center;
      line-height: 33px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
  }
  .line {
    position: relative;
    margin-top: -13px;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    .round {
      position: absolute;
      width: 22px;
      height: 22px;
      z-index: 999;
      border-radius: 50%;
      background-color: #2f1941;
      top: 50%;
      transform: translateY(-50%);
    }
    .round.left {
      left: -11px;
    }
    .round.right {
      right: -12px;
    }
    span {
      opacity: 0.3;
      display: inline-block;
      transform: scaleX(0.8);
      color: rgba(151, 151, 151, 1);
      margin: 0 2px;
    }
  }
  .section_content {
    padding: 20px 22px 0px 22px;
    //display: flex;
    //flex-wrap: wrap;
    //justify-content: space-around;
    .content_item {
      display: inline-block;
      box-sizing: border-box;
      margin-bottom: 25px;
      vertical-align: top;
      .item_title {
        margin-bottom: 10px;
        font-size: 15px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
      }
      .item_content_wrapper {
        font-size: 13px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.7);
        .item_content {
          margin-bottom: 7px;
        }
        .item_content:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .content_item:nth-child(odd) {
      width: 54%;
      padding-right: 5px;
    }
    .content_item:nth-child(even) {
      padding-left: 5px;
      width: 46%;
    }
  }
  //   .round{

  //       position: absolute;
  //       width: 200px;
  //       height: 200px;
  //       z-index: 999;
  //       border-radius: 50%;
  //       background-color: yellow;
  //       top: 50%;
  //       transform: translateY(-50%);
  //       left: -11px;
  //   }
}
// @media screen and (min-width: 900px) {
//     .page_title,.section {
//         width: 800px;
//     }
// }
</style>

