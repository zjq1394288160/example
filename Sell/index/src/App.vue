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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    /*font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;*/
    /*-webkit-tap-highlight-color:transprent;*/
  }
  html{
    background-color: #f5f5f5;
  }
  button,input{
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
  }
</style>

