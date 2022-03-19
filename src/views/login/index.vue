<template>
  <div id="login-contenter">
<!--    头部-->
    <van-nav-bar title="登录" class="nav-bar-top"/>
<!--    用户名/密码-->
    <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="请输入手机号"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        name="验证码"
        placeholder="请输入验证码"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-button class="send-btn" round size="small" type="default">获取验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-box">
        <van-button block type="info" native-type="submit" class="login-btn">登录</van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
export default {
  name: 'loginIndex',
  data () {
    return {
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="less">
  .toutiao {
    font-size: 37px;
  }
  .login-btn-box {
    padding: 53px 33px;
    .login-btn{
      background-color: #6db4fb;
      border: none;
    }
  }
  .send-btn{
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
    padding:0;
  }
</style>
