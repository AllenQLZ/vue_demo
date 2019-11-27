<template>
  <div class="shopping">
   商城页面
  </div>
</template>

<script>
import { Swipe, SwipeItem, Toast } from "vant";
export default {
  name: "index",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Toast.name]: Toast
  },
  methods: {
    onChange: function(active) {
      Toast("当前 Swipe 索引：" + active);
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
.shopping {

}
</style>
