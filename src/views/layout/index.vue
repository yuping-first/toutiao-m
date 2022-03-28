<template>
<div id ="layout-contenter">
  <router-view></router-view>
  <van-tabbar class="layout-bar" route>
    <van-tabbar-item to="/">
      <i slot="icon" class="toutiao toutiao-shouye" ></i>
      <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item to="/qa">
      <i slot="icon" class="toutiao toutiao-wenda"></i>
      <span>问答</span>
    </van-tabbar-item>
    <van-tabbar-item to="/video">
      <i slot="icon" class="toutiao toutiao-shipin"></i>
      <span>视频</span>
    </van-tabbar-item>
    <van-tabbar-item to="/my">
      <i slot="icon" class="toutiao toutiao-wode"></i>
      <span>{{ $store.state.user ? '我的' : '未登录' }}</span>
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
#layout-contenter {
  .layout-bar {
   i.toutiao{
     font-size: 40px;
   }
    span{
      font-size: 24px;
    }
  }
}
</style>
