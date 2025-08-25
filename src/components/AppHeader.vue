<template>
    <div class="app-header">{{ text }}</div>
</template>

<script setup>
defineProps({
    text: String,
})
</script>
<style scoped>
.app-header {
    width: 100vw;
    text-align: center;
    margin: 60px 0 15px 0; 
    font-weight: 600;
    font-size: 22px;
    color: white;
}
</style>
