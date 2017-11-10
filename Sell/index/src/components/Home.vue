<template>
    <div>
        <!--<a href="#/hello">商店1</a>-->
        <homeheader></homeheader>
        <homecontent :headinfo="headinfo"></homecontent>
        <app-footer :id="id"></app-footer>
    </div>
</template>

<script>
    import Footer from './Footer.vue';
    import HomeHeader from './Home/HomeHeader.vue';
    import HomeContent from './Home/HomeContent.vue';
    export default {
        name:'home',
        data(){
            return {
                id:1,
                headinfo:[]
            }
        },
        mounted:function () {
            fetch('/api/get_store')
                .then(res=>res.json())
                .then(data => this.headinfo = data)
        },
        components:{
            'homeheader': HomeHeader,
            'homecontent':HomeContent,
            'app-footer': Footer,
        },
    }
</script>

<style>

</style>