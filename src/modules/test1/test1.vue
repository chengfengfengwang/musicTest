<template>
  <div>
    <div style="text-align:center">
      <img :src="previewSrc" alt>
    </div>
    <Uploader :after-read="afterRead" style="width:100%;margin-top:8vh;text-align:center">
      <Button loading-type="circular" :loading="loading" loading-text="上传中" type="primary">上传图片</Button>
    </Uploader>
    <!-- <Button type="primary">主要按钮2</Button> -->
  </div>
</template>
<script>
import { Button } from "vant";
import { Uploader } from "vant";
const qiniu = require("qiniu-js");

export default {
  data() {
    return {
      previewSrc: "",
      loading: true
    };
  },
  components: {
    Button,
    Uploader
  },
  mounted() {
    console.log(process.env);
    // this.$dialog.alert({
    //   message: "弹窗内容"
    // });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.previewSrc = file.content;
      return;
      this.upload(file.file, file.name);
    },
    upload(file) {
      var token = "";
      var putExtra = {
        fname: "", //文件原文件名
        params: {}, //用来放置自定义变量
        mimeType: [] || null //用来限制上传文件类型，为 null 时表示不对文件类型限制；限制类型放到数组里：
      };
      var config = {
        useCdnDomain: true,
        region: qiniu.region.z2
      };
      var observable = qiniu.upload(file, key, token, putExtra, config);
      var observer = {
        next(res) {
          // ...
        },
        error(err) {
          // ...
        },
        complete(res) {
          // ...
        }
      };
      var subscription = observable.subscribe(observer);
    }
  }
};
</script>

