<template>
    <div>
        <findheader></findheader>
        <findcontent></findcontent>
        <app-footer :id="id"></app-footer>
    </div>
</template>
<script>
    import Footer from './Footer.vue'
    import FindHeader from './Find/FindHeader.vue'
    import FindContent from './Find/FindContent.vue'
    export default {
        name:'find',
        data(){
            return {
                id:2,
            }
        },
        components:{
            'findheader':FindHeader,
            'findcontent':FindContent,
            'app-footer':Footer,
        }
    }
</script>
<style>

</style>