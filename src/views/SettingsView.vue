<template>
    <div class="settings-body">
        <div class="settings-title">{{ title }}</div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import ToggleSwitch from '@/components/buttons/ToggleSwitch.vue';

const title = ref('Настройки');
const state = ref(0);

</script>

<style scoped>
.settings-body {
    width: 324px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    inset: 0;
    margin: 90px auto auto auto
}

.settings-title {
    font-size: 21px;
    font-weight: 600;
}
</style>