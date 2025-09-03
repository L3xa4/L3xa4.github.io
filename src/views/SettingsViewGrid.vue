<template>
    <div class="settings-body">
        <div class="settings-title">{{ title }}</div>
        <div class="settings-buttons-body">
            <div class="profile-body">
                <div class="avatar" style="grid-area: avatar;"></div>
                <div class="name" style="grid-area: firstName;">Платон</div>
                <div class="name" style="grid-area: surname;">Пряженников</div>
                <div class="carData" style="grid-area: carData;">Nissan Bluebird Sylphy</div>
                <div class="moonCoin" style="grid-area: moonCoin;">
                    <div class="counter-wrapper">2000</div>
                </div>
                <div class="carNumberColor" style="grid-area: carNumber;">E663KX</div>
                <div class="carNumberColor" style="grid-area: carColor;">Черный</div>
                <!-- <div class="free-space" style="grid-area: freeSpace;"></div> -->
            </div>
            <div class="buttons-body"></div>
            <div class="notifications-body"></div>
        </div>
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

.settings-buttons-body {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr max-content 1fr;
    grid-template-columns: 1fr;
}

.profile-body {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 27px);
    /* gap: 5px; */
    grid-template-areas:
    "avatar firstName firstName"
    "avatar surname surname"
    "avatar carData carData"
    "moonCoin carNumber carColor";
}

.avatar {
    height: 72px;
    width: 72px;
    background-color: gray;
    border-radius: 50%;
}

.name {
    height: 22px;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
}

.carData {
    height: 17px;
    font-size: 17px;
    font-weight: 600;
    padding-top: 7px;
}

.moonCoin {
    display: flex;
    width: 89px;
    height: 33px;
    background-image: url('../assets/img/moonCoinCounter.svg');
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    justify-content: end;
}

.counter-wrapper {
    width: 57px;
    text-align: center;
}

.carNumberColor {
    font-size: 18px;
    font-weight: 600;
    padding-top: 7px;
}

.buttons-body {
    width: 262px;
    height: 240px;
}
</style>