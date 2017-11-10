<template>
  <div>
    <shop-header :data="shopData"></shop-header>

    <div class="title">
      <div  @click="showtab(1)" :class="{one:isactive,oneded:active===1}" >
        <span>商品</span>
      </div>
      <div :class="{one:isactive,oneded:active===2}" @click="showtab(2)">
        <span>评价</span>
      </div>
      <div :class="{one:isactive,oneded:active===3}" @click="showtab(3)">
        <span>店铺</span>
      </div>
    </div>

    <shop :categories="catesdata" :goods="shops" :shopdata="shopData" :total="total" :choicecates="choicecates" v-if="active==1" ></shop>
    <!--评价-->
    <evalation v-if="active==2"></evalation>
    <!--店铺-->
    <shopstore v-if="active==3"></shopstore>
    <!--购物车-->
    <!--<shopfooter ></shopfooter>-->
  </div>
</template>

<script>


  import ShopHeader from './Hello/ShopHeader.vue';
  import Shop from './Hello/Shop.vue';
  import Evalation from './Hello/Evaluation.vue';
  import ShopStore from './Hello/ShopStore.vue';


  export default {
      name: 'hello',
      data () {
        return {
          show:1,
          active:1,
          isactive:true,
          shopData:[],
          categories:[],
          goods:[],
        }
      },
      computed:{
           catesdata:function () {
              let r=[];
              this.categories.forEach(v=>{
                  let n=0;
                  this.goods.forEach(g=>{
                      if(g.cid==v.id){
                          n += g.num;
                      }
                      v.num=n;
                  })
                  r.push(v);
                  return r;
              })
              return r;
           },
           shops:function () {
               let r={};
               let t={};
               this.categories.forEach(v=>{
                  r[v.name]=[];
                  t[v.id]=v.name;
               });
               this.goods.forEach(v=>{
                  r[t[v.cid]].push(v);
               })
               return r;
           },
          total:function (value) {
              let t=0;
              this.goods.forEach(v=>{
                  t+=v.num*v.price;
              })
              return t;
          },
          choicecates:function () {
              let r=[];
              this.goods.filter(v=>{
                  if(v.num>0){
                      r.push(v);
                  }
              })
              return r;
          }
      },
      mounted:function () {
          let sid=this.$route.query.sid;
          fetch('/api/get_store_info?id='+sid)
              .then(res=>res.json())
              .then(data=>this.shopData=data[0])
          fetch('/api/get_cates?sid='+sid)
              .then(res=>res.json())
              .then(data=>this.categories=data)
          fetch('/api/get_goods?sid='+sid)
              .then(res=>res.json())
              .then(data=>{
                  this.goods=data.map(v=> {
                      v.num = 0;
                      return v;
                  })
                  if(localStorage.choicecates){
                      let g=JSON.parse(localStorage.choicecates);
                      g.forEach(v=>{
                          this.goods.forEach(c=>{
                              if(v.id==c.id){
                                  c.num=v.num;
                              }
                          })
                      })
                  }
              })
//              .then(data=>{this.goods=data.map(v=>{v.num=0;return v;}})
      },
//      mounted: function () {
//          fetch(`/api/get_cates?sid=${this.shopData.id}`)
//              .then(res=>res.json())
//              .then(data => this.categories = data)
//          fetch('/api/get_goods')
//              .then(res=>res.json())
//              .then(data=>this.goods = data)
//      },
      components:{
          'shop-header':ShopHeader,
          'shop':Shop,
          'shopstore':ShopStore,
          'evalation':Evalation,
      },
      methods:{
          showtab:function (active) {
              return this.active=active;
          },
      }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title{
    line-height: 1.066667rem;
    display: flex;
    background-color: #fff;
    box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.06);
    margin-bottom: -1px;
    border-bottom: 1px solid #ddd;
  }
  .title div{
    position: relative;
    flex: 1;
    text-align: center;
    font-size: .373333rem;
    color: #666;
    border-bottom: 1px solid #ddd;
  }
  .oneded{
    color: #EECE13;
    font-weight: 700;
  }
  .oneded span{
    position: relative;
  }
  .oneded span:after{
    content: "";
    position: absolute;
    bottom: -.266667rem;
    left: 0;
    right: 0;
    height: .08rem;
    background-color: #EECE13;
  }
</style>
