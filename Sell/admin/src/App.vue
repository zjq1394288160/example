<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    *{
      padding:0;
      margin:0;
      list-style:none;
      text-decoration: none;
    }
    /*html,body{*/
      /*height:100%;*/
    /*}*/
    body{
        background-color: #ebeef2;
        font-family: -apple-system,Helvetica Neue,Arial,PingFang SC,lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    }
</style>
