<template>
  <div class="cart">
    <h4>购物车</h4>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <div slot="tags">
        <van-tag plain type="danger">无打蜡</van-tag>
        <van-tag plain type="danger">清新</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" class="cancle">取消</van-button>
        <van-button size="mini">确认</van-button>
      </div>
    </van-card>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <div slot="tags">
        <van-tag plain type="danger">无打蜡</van-tag>
        <van-tag plain type="danger">清新</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" class="cancle">取消</van-button>
        <van-button size="mini">确认</van-button>
      </div>
    </van-card>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <div slot="tags">
        <van-tag plain type="danger">无打蜡</van-tag>
        <van-tag plain type="danger">清新</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" class="cancle">取消</van-button>
        <van-button size="mini">确认</van-button>
      </div>
    </van-card>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <div slot="tags">
        <van-tag plain type="danger">无打蜡</van-tag>
        <van-tag plain type="danger">清新</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" class="cancle">取消</van-button>
        <van-button size="mini">确认</van-button>
      </div>
    </van-card>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <div slot="tags">
        <van-tag plain type="danger">无打蜡</van-tag>
        <van-tag plain type="danger">清新</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" class="cancle">取消</van-button>
        <van-button size="mini">确认</van-button>
      </div>
    </van-card>
       <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL">
      <div slot="tags">
        <van-tag plain type="danger">无打蜡</van-tag>
        <van-tag plain type="danger">清新</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" class="cancle">取消</van-button>
        <van-button size="mini">确认</van-button>
      </div>
    </van-card>
    <van-submit-bar class="price" :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast, Card ,SubmitBar} from "vant";
import C_2 from "../../assets/images/qc_2.jpg";
export default {
  name: "index",
  components: {
    [SubmitBar.name]: SubmitBar,
    [Card.name]: Card,
    [Toast.name]: Toast
  },
  methods: {
    onChange: function(active) {
      Toast("当前 Swipe 索引：" + active);
    }
  },
  data() {
    return {
      active: 0,
      imageURL: C_2
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.cancle {
  margin-right: 10px;
}
.price {
    bottom: 55px;
}
</style>
