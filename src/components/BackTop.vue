<template>
  <div id="backTop">
    <Button @click="backToTop">asdasd</Button>
  </div>
</template>
<script>
import "iview/dist/styles/iview.css";

import { Button, BackTop } from "iview";
export default {
  components: {
    BackTop,
    Button
  },
  methods: {
    backToTop() {
      var timer = null;

      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - 100;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#backTop {
  position: fixed;
  bottom: 200px;
  right: 30px;
}
</style>

