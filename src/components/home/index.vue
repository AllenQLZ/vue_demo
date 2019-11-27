
<template>
  <div class="home">
    <!-- <van-swipe @change="onChange">
      <van-swipe-item class="item1"></van-swipe-item>
      <van-swipe-item class="item2"></van-swipe-item>
      <van-swipe-item class="item3"></van-swipe-item>
      <van-swipe-item class="item4"></van-swipe-item>
    </van-swipe>-->
    <!-- <router-view /> -->
    <van-tabbar v-model="active" route>
      <!-- <van-tabbar v-model="active" route @change="tabChange(active)"> -->
      <van-tabbar-item name="home" icon="home-o" to="./homePage">首页</van-tabbar-item>
      <van-tabbar-item name="shopCar" icon="cart-o" info="5" to="./cart">购物车</van-tabbar-item>
      <van-tabbar-item name="shop" icon="shop-o" dot to="./shopping">商城</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" to="./setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Swipe, SwipeItem, Toast } from "vant";
export default {
  name: "index",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Toast.name]: Toast
  },
  methods: {
    tabChange: function(active) {
      Toast("当前 Tabbar 索引：" + active);
      this.setData({
        active: active
      });
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  /* height: ~'calc(100vh - 44px)'; */
  /* height: 100vh; */
  background: #f0f0f0;
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
</style>
