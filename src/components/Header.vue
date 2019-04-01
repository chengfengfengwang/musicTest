<template>
  <header class="wrapper">
    <div class="logo">
      <img
        src="./../assets/img/logo_yyk.png"
        alt
      >
    </div>
    <ul class="nav_list">
      <li>
        <a href="javascript:;">首页</a>
      </li>
      <li>
        <a href="javascript:;">课程</a>
      </li>
      <li>
        <a href="javascript:;">关于我们</a>
      </li>
    </ul>
    <div class="contact">
        <img class="contact_wechat" src="./../assets/img/wecheat.png" alt="">
        <img class="contact_weibo" src="./../assets/img/weibo.png" alt="">
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="less" scoped>
header {
  font-family: SourceHanSansCN-Regular;
  height: 68px;
  line-height: 68px;
  position: relative;
  .logo {
    position: absolute;
    left: 36px;
    top:0px;
    display: flex;
    height: 100%;
    align-items: center;
    img {
      width: 104px;
    }
  }
  .nav_list {
      font-size: 16px;
    margin: 0 auto;
    width: 500px;
    display: flex;
    justify-content: space-between;
    & > li > a {
      display: inline-block;
      text-align: center;
      width: 100px;
      height: 68px;
      line-height: 68px;
    }
    & > li > a.active {
      background-color: #ffaf06;
      color: #fff;
    }
  }
  .contact{
      position: absolute;
      right: 26px;
      top:0;
      height: 100%;
      display: flex;
      align-items: center;
      .contact_wechat{
          width: 24px;
          margin-right: 40px;
      }
      .contact_weibo{
          width: 24px;
      }
  }
}
</style>


