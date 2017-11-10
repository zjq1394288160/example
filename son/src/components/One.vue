<template>
  <div>
    <div>
      <router-link :to="{path:'/'}">
        <span>首页</span>
      </router-link>
      <router-link :to="{path:'/one/order'}">
        <span>接单</span>
      </router-link>
      <router-link :to="{path:'/one/demo'}">
        <span>完成</span>
      </router-link>
      <router-link :to="{path:'/one'}">
        <span>未完成</span>
      </router-link>
      <router-link :to="{path:'/one'}">
        <span>订单</span>
      </router-link>
      <div>
        <router-view/>
      </div>
      <slot>你好喽</slot>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>

</style>
