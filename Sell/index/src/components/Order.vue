<template>
    <div>
        <orderheader></orderheader>
        <app-footer :id="id"></app-footer>
    </div>
</template>

<script>
    import Footer from './Footer.vue';
    import OrderHeader from './Order/OrderHeader.vue';
    export default {
        name:'order',
        data(){
            return{
                id:3,
            }
        },
        components:{
            'app-footer': Footer,
            'orderheader':OrderHeader,
        }
    }
</script>

<style>

</style>