<template>
  <div class="search_key">
    <div class="section">
      <h4>VIP状态查询</h4>
      <div class="search_wrapper" style="margin-top:10px">
        <input v-on:keyup.enter="search" v-model="key" type="text" style="margin-right:10px">
        <div class="btn" @click="search">查询</div>
      </div>
      <div class="my_result" v-show="resultShow">
        <span>查询结果：</span>
        {{resultMessage}}
      </div>
    </div>
    <div class="section">
      <h4>注册VIP</h4>
      <div class="search_wrapper" style="margin-top:10px">
        <input
          v-on:keyup.enter="register"
          v-model="registerKey"
          type="text"
          style="margin-right:10px"
        >
        <div class="btn" @click="register">注册</div>
      </div>
    </div>
    <div class="section">
      <h4>取消VIP</h4>
      <div class="search_wrapper" style="margin-top:10px">
        <input v-on:keyup.enter="cancel" v-model="cancelKey" type="text" style="margin-right:10px">
        <div class="btn" @click="cancel">取消</div>
      </div>
    </div>

    <!-- <div class="no-data" v-show="!resultShow">{{errMsg}}</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      registerKey: "",
      cancelKey: "",
      errMsg: "",
      resultMessage: "",
      resultShow: false
    };
  },
  mounted() {
    //this.search("y7z4cqx");
  },
  methods: {
    //y7z4cqx
    cancel() {
      this.axios
        .get(
          `http://iguitar.immusician.com:2525/v3/users/vip/update_vip/?tel=${
            this.cancelKey
          }&state=0`
        )
        .then(res => {
          this.$loading.hide();
          var res = res.data.data;
          if (!res.error) {
            alert(res.msg);
          }
        });
    },
    register() {
      this.axios
        .get(
          `http://iguitar.immusician.com:2525/v3/users/vip/update_vip/?tel=${
            this.registerKey
          }`
        )
        .then(res => {
          this.$loading.hide();
          var res = res.data.data;
          if (!res.error) {
            alert(res.msg);
          }
        });
    },
    search() {
      this.axios
        .get(`http://iguitar.immusician.com:2525/v3/users/vip/feedback/?tel=${this.key}`)
        .then(res => {
          this.$loading.hide();
          var res = res.data.data;
          this.resultShow = true;
          this.resultMessage = "";
          for (var key in res) {
            this.resultMessage += `${key}：${res[key]} `;
          }
        });
    },
    update(code) {
      this.$loading.show("查询中...");
      if (this.status == "create") {
        //取消
        var state = 0;
      } else {
        //创建
        var state = 1;
      }
      this.axios
        .get(
          `http://iguitar.immusician.com:2525/v3/users/vip/update_vip/?tel=${
            this.key
          }&state=${state}`
        )
        .then(res => {
          this.$loading.hide();
          var res = res.data;
          if (res.error) {
            this.resultShow = false;
            this.errMsg = res.message;
          } else {
            this.resultShow = true;
            var res = res.data;
            console.log(this.my_result);
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.section{
  border-bottom :1px solid #f2f2f2;
  padding: 10px 20px 20px 20px;
  margin:10px 
}
h4 {
  //padding: 15px 0;
  font-size: 16px;
  text-align: center;
}
.search_wrapper {
  text-align: center;
}
.search_key {
  padding: 10px;
}
.my_result {
  margin-top: 20px;
  text-align: center;
}
@media screen and (min-width: 700px) {
  .my_result {
    width: 700px;
    margin: 20px auto;
  }
  .section {
    width: 700px;
    margin: 20px auto;
    padding: 30px;
    border:1px dashed #a78181
  }
}
</style>



