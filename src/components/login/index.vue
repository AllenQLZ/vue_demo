<template>
  <div class="login">
    <h3>登录</h3>
    <div class="loginInput">
       <van-cell-group>
        <van-field
            v-model="username"
            label="用户名"
            placeholder="请输入用户名"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
        />
      </van-cell-group>
      <van-button type="primary" class="loginIn" v-on:click="loginIn">登录</van-button>
      <div class="tips">
          <div><a v-on:click="forget">忘记密码?</a></div>
          <div><a v-on:click="registe">注册</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { DatetimePicker,Button,Field,Dialog  } from "vant"
export default {
  name: 'index',
  components:{
         [Button.name]:Button,
         [Field.name]:Field,
         [Dialog.name]:Dialog,
         [DatetimePicker.name]:DatetimePicker
      },
 methods: {
    registe: function () {
      this.$router.push({path:'/mine'});
    },
    forget: function () {
       this.$router.push({path:'/mine'});
    },
    loginIn: function () {
       this.$router.push({path:'/home'});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    /* height: ~'calc(100vh - 44px)'; */
    height: 100vh;
    background: #f0f0f0;
}
h3{
    height: 45px;
    margin: 0;
    line-height: 45px;
    background: orange;
    text-align: center;
    color: #fff;
    font-size: 20px;
}
.loginInput {
    margin-top: 15px;
    padding: 0 15px
}
.loginIn {
    width: 100%;
    margin-top: 20px;
    height: 45px;
    font-size: 16px;
    line-height: 45px;
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
