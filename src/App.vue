

<template>
    <router-view></router-view>
</template>

<script setup lang="tsx">

const props = defineProps({
    foo: {
        type: String
    }
});

</script>

<style lang="scss">
@import '@/assets/styles/entry.scss';
</style>
