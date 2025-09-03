<template>
    <div class="privacy-settings-body">
        <div class="privacy-switchers">
            <div class="switcher-body">
                <div class="switcher-title">Показывать Telegram ID</div>
                <ToggleSwitch v-model="showTg"/>
            </div>
            <div class="switcher-body">
                <div class="switcher-title">Отображение машины</div>
                <ToggleSwitch v-model="showCar"/>
            </div>
            <div class="switcher-body">
                <div class="switcher-title">Отображение фамилии</div>
                <ToggleSwitch v-model="showSurname"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ToggleSwitch from '@/components/inputfields/ToggleSwitch.vue';
import { ref } from 'vue';

let showTg = ref(false);
let showCar = ref(false);
let showSurname = ref(false);
</script>

<style scoped>
.privacy-settings-body {
    position: absolute;
    width: 324px;
    height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.privacy-switchers {
    width: 324px;
    height: 131px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.switcher-body {
    width: 324px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.switcher-title {
    font-size: 18px;
}
</style>
