<template>
    <div>
        <span v-for="xx in database">{{xx.age}}</span>
      <input type="text" v-model="msg">
    </div>
</template>
<script>
export default {
  data(){
    return{
      database:[
        {age:11},
        {age:12},
        {age:13},
        {age:14}
      ],
      msg:123
    }
  }
}
</script>
<style scoped>

</style>
