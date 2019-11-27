<template>
  <div class="registe">
    <van-icon name="arrow-left" class="icon" v-on:click="goBack" />
    <h3>{{title}}</h3>
    <div class="registeContent">
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        <van-field v-model="password" type="password" label="重复密码" placeholder="请输入密码" required />
        <van-field required clearable label="邮箱" placeholder="请输入邮箱" />
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <div class="tips">
        <div></div>
        <div>
          <a v-on:click="login">已有账号？去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DatetimePicker, Button, Field, Dialog, Icon } from "vant";
export default {
  name: "index",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Dialog.name]: Dialog,
    [Icon.name]: Icon,
    [DatetimePicker.name]: DatetimePicker
  },
  methods: {
    login: function() {
      this.$router.push({ path: "/login" });
    },
    goBack: function() {
      window.history.back();
    }
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style>
.registe {
  /* height: ~'calc(100vh - 44px)'; */
  height: 100vh;
  background: #f0f0f0;
}
.icon {
  position: absolute;
  left: 15px;
  top: 15px;
  color: #fff;
}
h3 {
  height: 45px;
  margin: 0;
  line-height: 45px;
  background: orange;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.registeContent {
  margin-top: 15px;
  padding: 0 15px;
}
.tips {
  margin-top: 5px;
  display: flex;
  flex-basis: row;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}
</style>


