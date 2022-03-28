<template>
  <div id="login-contenter">
<!--    头部-->
    <van-nav-bar
      title="登录"
      class="nav-bar-top"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    ></van-nav-bar>
<!--    用户名/密码-->
    <van-form @submit="onSubmit" ref="formname">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="formData.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="formData.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-count-down
            v-if="iscountDown"
            :time="1000 * 3"
            format="ss s"
            @finish="iscountDown = false"/>
          <van-button
            v-else
            native-type="button"
            class="send-btn"
            round size="small"
            type="default"
            @click="sendmsg"
          >获取验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-box">
        <van-button block type="info" native-type="submit" class="login-btn">登录</van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
import { login, sendmss } from '@/api/user'
export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formData: {
        mobile: [{ required: true, message: '请填写手机号' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '请填写正确的手机号' }],
        code: [{ required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '请填写正确的验证码' }]
      },
      iscountDown: false
    }
  },
  methods: {
    async onSubmit () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await login(this.user)
        this.$toast.success('登录成功')
        this.$store.commit('setUser', data.data)
        this.$router.back()
      } catch (e) {
        this.$toast.fail('登录失败')
        console.log(e)
      }
    },
    async sendmsg () {
      try {
        await this.$refs.formname.validate('mobile')
      } catch (e) {
        return console.log(e)
      }
      // 倒计时
      this.iscountDown = true
      try {
        await sendmss(this.user.mobile)
        this.$toast('发送成功')
      } catch (error) {
        this.iscountDown = false
        if (error.response.status === 429) {
          this.$toast('发送验证码频繁，稍后重试')
        } else {
          this.$toast('发送验证码失败，稍后重试')
        }
        // console.log(e)
      }
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
