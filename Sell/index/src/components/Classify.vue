<template>
    <div>
        <class></class>
        <classcont></classcont>
    </div>
</template>

<script>
    import Class from './Classify/Class.vue';
    import ClassCont from './Classify/Classcont.vue';

    export default {
        name:'classify',
        components:{
            'class':Class,
            'classcont':ClassCont,
        }
    }

</script>

<style>

</style>