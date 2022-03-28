<template>
    <div id="my-contenter">
<!--      已登陆-->
      <div v-if="user" class="my-header">
        <div class="touxiang">
          <div class="left">
            <van-image
              class="alter"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
              fit="cover"
              round
            />
            <span class="text">黑马头条</span>
          </div>
          <div class="right">
            <van-button size="small" type="default" round>编辑资料</van-button>
          </div>
        </div>
        <div class="gz">
          <div class="gz-content">
            <span class="num">10</span>
            <span class="tex">头条</span>
          </div>
          <div class="gz-content">
            <span class="num">10</span>
            <span class="tex">关注</span>
          </div>
          <div class="gz-content">
            <span class="num">10</span>
            <span class="tex">粉丝</span>
          </div>
          <div class="gz-content">
            <span class="num">10</span>
            <span class="tex">获赞</span>
          </div>
        </div>
      </div>
<!--      未登录-->
      <div v-else class="my-header conhead">
        <div class="not-header" @click="$router.push('/login')">
          <img src="@/assets/mobile.png" alt="">
          <span>登录 / 注册</span>
        </div>
      </div>
<!--      导航-->
      <van-grid class="my-nav" :column-num="2" clickable>
        <van-grid-item class="nav-items">
          <i slot="icon" class="toutiao toutiao-shoucang"></i>
          <span slot="text">收藏</span>
        </van-grid-item>
        <van-grid-item class="nav-items">
          <i slot="icon" class="toutiao toutiao-lishi"></i>
          <span slot="text">历史</span>
        </van-grid-item>
      </van-grid>
      <div class="message">
        <van-cell title="消息通知" is-link />
        <van-cell title="小智同学" is-link />
        <van-cell v-if="user" clickable @click="gologinout" title="退出登录" class="go-login" />
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'myIndex',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    gologinout () {
      this.$dialog.confirm({
        title: '确认退出吗？'
      }).then(() => {
        // on confirm
        // 确认退出：清除登录状态（容器中的 user + 本地存储中的 user）
        this.$store.commit('setUser', null)
      }).catch(() => {
        // on cancel
        console.log('取消执行这里')
      })
    }
  }
}
</script>

<style scoped lang="less">
#my-contenter {
  height:100vh;
  background:#eee;
  .my-header{
    height: 361px;
    background:url("~@/assets/banner.png");
    background-size:cover;
    .touxiang{
      height: 231px;
      padding:76px 32px 23px;
      box-sizing: border-box;
      display:flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display:flex;
        align-items: center;
        .alter{
          width: 132px;
          height: 132px;
          border:4px solid #fff;
          margin-right:23px;
        }
        .text{
          font-size: 30px;
          color:#fff;
        }
      }
      .right{}
    }
    .gz{
      display: flex;
      .gz-content{
        height: 130px;
        flex:1;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        color:#fff;
        .num{
          font-size: 36px;
        }
        .tex{
          font-size: 23px;
        }
      }
    }
  }
  .conhead{
    display: flex;
    justify-content: center;
    align-items: center;
    .not-header{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img{
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      span{
        font-size: 28px;
        color:#fff;
      }
    }
  }
  .my-nav{
    .nav-items{
      height: 141px;
      .toutiao{
        font-size: 45px;
      }
      .toutiao-shoucang{
        color:#eb5253;
      }
      .toutiao-lishi{
        color:#fe9ded;
      }
      span{
        font-size: 28px;
      }
    }
  }
  .message{
    margin-top: 9px;
  }
  .go-login{
    margin-top: 9px;
    text-align: center;
    color:red;
  }
}
</style>
