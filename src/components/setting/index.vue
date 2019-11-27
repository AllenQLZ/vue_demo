<template>
  <div class="setting">
      <div></div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Toast, Cell, CellGroup } from "vant";
export default {
  name: "index",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
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
.setting {
}
</style>
