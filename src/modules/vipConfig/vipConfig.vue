<template>
  <div class="search_key">
    <h4>VIP状态查询</h4>
    <div class="search_wrapper">
      <input v-on:keyup.enter="search" v-model="key" type="text" style="margin-right:10px">
      <div class="btn" @click="search">查询</div>
    </div>
    <div class="result" v-show="resultShow">
      <div class="row">
        <div class="label">创建时间</div>
        <div>{{result.created_at}}</div>
      </div>
      <div class="row">
        <div class="label">用户电话</div>
        <div>{{result.tel}}</div>
      </div>
      <div class="row">
        <div class="label">激活课程名称</div>
        <div>{{result.course_name}}</div>
      </div>
      <div class="row">
        <div class="label">激活课程id</div>
        <div>{{result.course_id}}</div>
      </div>
    </div>
    <div class="no-data" v-show="!resultShow">{{errMsg}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: "",
      errMsg: "",
      result: {
        created_at: "",
        tel: "",
        course_name: "",
        course_id: ""
      },
      resultShow: false
    };
  },
  mounted() {
    //this.search("y7z4cqx");
  },
  methods: {
    //y7z4cqx
    search(code) {
      this.$loading.show("查询中...");
      this.axios
        .get(
          `http://iguitar.immusician.com:2525/v3/active_code/search/?code=${
            this.key
          }`
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
            this.result.created_at = res.created_at;
            this.result.tel = res.user.tel;
            this.result.course_name = res.sup_courses.course_name;
            this.result.course_id = res.sup_courses.course_id;
            console.log(this.result);
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
h4{
    padding: 15px 0;
    font-size: 16px;
    text-align: center;
}
.search_wrapper {
  text-align: center;
}
.search_key {
  padding: 10px;
}
.result {
  margin-top: 20px;
  .row {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 700px) {
  .result {
    width: 700px;
    margin: 20px auto;
  }
}
</style>



