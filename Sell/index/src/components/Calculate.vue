<template>
    <div>
        <calcheader></calcheader>
    </div>
</template>

<script>
    import CalcHeader from './Calculate/CalcHeader.vue';

    export default {
        name:'calculate',
        data(){
            return{

            }
        },
        components:{
            'calcheader':CalcHeader,
        }
    }
</script>

<style>

</style>