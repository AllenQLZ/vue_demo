<template>
  <div class="homePage">
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item class="item1"></van-swipe-item>
      <van-swipe-item class="item2"></van-swipe-item>
      <van-swipe-item class="item3"></van-swipe-item>
      <van-swipe-item class="item4"></van-swipe-item>
    </van-swipe>
    <div class="content" v-if="isLoad">
      <van-skeleton title :row="3" v-for="item in 5" :key="item"></van-skeleton>
    </div>
    <div v-else>
      <div :key="item" class="itemContent">
        <p>赣南脐橙</p>
        <p>
             &nbsp;&nbsp;&nbsp;&nbsp;赣南脐橙，江西省赣州市特产，中国国家地理标志产品。赣南脐橙年产量达百万吨，原产地江西省赣州市已经成为脐橙种植面积世界第一，年产量世界第三、全国最大的脐橙主产区。
          赣南脐橙已被列为全国十一大优势农产品之一，荣获“中华名果”等称号。赣南脐橙作为江西省唯一产品，入围商务部、质检总局中欧地理标志协定谈判的地理标志产品清单。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Toast, Skeleton } from "vant";
export default {
  name: "index",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Toast.name]: Toast,
    [Skeleton.name]: Skeleton
  },
  methods: {
    onChange: function(active) {
      Toast("当前 Swipe 索引：" + active);
    }
  },
  data() {
    return {
      active: 0,
      isLoad: true
    };
  },
  mounted() {
    // 静态数据，所以用了计时器。正式项目中不用这样做
    setTimeout(
      function() {
        this.isLoad = false;
      }.bind(this),
      10000
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homePage {
  /* height: ~'calc(100vh - 44px)'; */
  height: 100vh;
  /* background: #f0f0f0; */
}
.item1 {
  width: 100%;
  height: 200px !important;
  background: url("../../assets/images/qc_1.jpg") no-repeat;
  background-size: 100% 100%;
}
.item2 {
  width: 100%;
  height: 200px !important;
  background: url("../../assets/images/qc_2.jpg") no-repeat;
  background-size: 100% 100%;
}
.item3 {
  width: 100%;
  height: 200px !important;
  background: url("../../assets/images/qc_3.jpg") no-repeat;
  background-size: 100% 100%;
}
.item4 {
  width: 100%;
  height: 200px !important;
  background: url("../../assets/images/qc_4.jpg") no-repeat;
  background-size: 100% 100%;
}
.content {
  margin-top: 15px;
  color: #fff;
}
.itemContent {
  margin-top: 15px;
  padding: 3px 8px;
}
</style>
