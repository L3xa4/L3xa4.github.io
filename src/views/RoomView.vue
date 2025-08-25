<template>
    <svg width="390" height="310" viewBox="0 0 390 310" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-light">
        <ellipse cx="195" cy="310" rx="307" ry="310" fill="url(#paint0_radial_709_562)" fill-opacity="0.36"/>
        <defs>
            <radialGradient id="paint0_radial_709_562" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(195 310) rotate(90) scale(310 307)">
                <stop stop-color="#4FC0FF"/>
                <stop offset="0.240385" stop-color="#449CCE" stop-opacity="0.759615"/>
                <stop offset="1" stop-color="#212933" stop-opacity="0"/>
            </radialGradient>
        </defs>
    </svg>
    <div class="page-body">
        <div class="add-info">
            <div class="dep-time-date">
                <div class="dep-icon">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5266 21C4.71278 21 0 16.2991 0 10.5C0 4.70085 4.71278 0 10.5266 0C16.3405 0 21.0533 4.70085 21.0533 10.5C21.0533 16.2991 16.3405 21 10.5266 21ZM10.5266 18.9C12.7601 18.9 14.9021 18.015 16.4814 16.4397C18.0607 14.8644 18.948 12.7278 18.948 10.5C18.948 8.27218 18.0607 6.13561 16.4814 4.5603C14.9021 2.985 12.7601 2.1 10.5266 2.1C8.29317 2.1 6.15118 2.985 4.57187 4.5603C2.99257 6.13561 2.10533 8.27218 2.10533 10.5C2.10533 12.7278 2.99257 14.8644 4.57187 16.4397C6.15118 18.015 8.29317 18.9 10.5266 18.9ZM11.5793 10.5H15.79V12.6H9.47398V5.25H11.5793V10.5Z" fill="#4FC0FF"/>
                    </svg>
                </div>
                <div class="dep-text">17:30</div>
            </div>
            <div class="rooms-num">123</div>
            <div class="dep-time-date">
                <div class="dep-icon">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.82459 11H14.8373V16H9.82459V11ZM16.8424 2H15.8398V0H13.8347V2H5.81444V0H3.80937V2H2.80683C1.70404 2 0.801758 2.9 0.801758 4V18C0.801758 19.1 1.70404 20 2.80683 20H16.8424C17.9451 20 18.8474 19.1 18.8474 18V4C18.8474 2.9 17.9451 2 16.8424 2ZM16.8424 4V6H2.80683V4H16.8424ZM2.80683 18V8H16.8424V18H2.80683Z" fill="#4FC0FF"/>
                    </svg>
                </div>
                <div class="dep-text">17:30</div>
            </div>
        </div>
        <TransitionGroup name="grid" class="room-body" tag="div">
            <div v-for="(item, index) in buttonsTemplats" :key="item" class="grid-item">
                <div v-if="item === 'info'" :class="['rooms-elem', item]" id="info-button">
                    <div class="ride-info-body">
                        <Transition tag="div" name="fade">
                            <div class="ride-info-wrapper" v-if="!state">
                                <div class="driver-info">
                                    <div class="avatar"></div>
                                    <div class="main">
                                        <div class="driver-name">Платон</div>
                                        <div class="driver-name">Пряженников</div>
                                        <div class="car-name">Nissan Bluebird Sylphy</div>
                                        <div class="number-color">
                                            <div class="car-number">E663KX</div>
                                            <div class="car-color">Зеленый</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="destinations">
                                    <div class="from-to-body">
                                        <div class="from-to-title">Откуда</div>
                                        <div class="from-to-text">Центральные ворота ДВФУ</div>
                                    </div>
                                    <div class="from-to-body">
                                        <div class="from-to-title">Куда</div>
                                        <div class="from-to-text">Центральные ворота ДВФУ</div>
                                    </div>
                                </div>
                                <div class="dashed-line"></div>
                                <div class="counter-price-body">
                                    <div class="counter-body">
                                        <div class="passengers-icon">
                                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 11C9.625 11 8.44792 10.5104 7.46875 9.53125C6.48958 8.55208 6 7.375 6 6C6 4.625 6.48958 3.44792 7.46875 2.46875C8.44792 1.48958 9.625 1 11 1C12.375 1 13.5521 1.48958 14.5312 2.46875C15.5104 3.44792 16 4.625 16 6C16 7.375 15.5104 8.55208 14.5312 9.53125C13.5521 10.5104 12.375 11 11 11ZM1 21V17.5C1 16.7917 1.1825 16.1408 1.5475 15.5475C1.9125 14.9542 2.39667 14.5008 3 14.1875C4.29167 13.5417 5.60417 13.0575 6.9375 12.735C8.27083 12.4125 9.625 12.2508 11 12.25C12.375 12.2492 13.7292 12.4108 15.0625 12.735C16.3958 13.0592 17.7083 13.5433 19 14.1875C19.6042 14.5 20.0887 14.9533 20.4537 15.5475C20.8187 16.1417 21.0008 16.7925 21 17.5V21H1Z" fill="white" stroke="black" stroke-width="2"/>
                                            </svg>
                                        </div>
                                        <div class="counter-price-text" style="letter-spacing: 8%;">0/3</div>
                                    </div>
                                    <div class="price-body">
                                        <div class="counter-price-text">100₽</div>
                                        <div class="per-unit">/чел</div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div v-else-if="item === 'exit'" :class="['rooms-elem', item]" id="exit-button">
                    <button class="exit-button">
                        <Transition name="fade">
                            <span v-if="state" :key="exitBtnLbl" class="exit-icon">
                                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.933594 13C0.933594 13.3315 1.06616 13.6495 1.30213 13.8839C1.5381 14.1183 1.85815 14.25 2.19186 14.25H11.7421L8.84808 17.1125C8.73014 17.2287 8.63654 17.367 8.57266 17.5193C8.50878 17.6716 8.47589 17.835 8.47589 18C8.47589 18.165 8.50878 18.3284 8.57266 18.4807C8.63654 18.633 8.73014 18.7713 8.84808 18.8875C8.96505 19.0047 9.10422 19.0977 9.25755 19.1611C9.41088 19.2246 9.57534 19.2572 9.74145 19.2572C9.90755 19.2572 10.072 19.2246 10.2253 19.1611C10.3787 19.0977 10.5178 19.0047 10.6348 18.8875L15.6679 13.8875C15.7824 13.7686 15.8722 13.6284 15.9321 13.475C16.058 13.1707 16.058 12.8293 15.9321 12.525C15.8722 12.3716 15.7824 12.2314 15.6679 12.1125L10.6348 7.1125C10.5175 6.99595 10.3782 6.9035 10.2249 6.84043C10.0717 6.77735 9.90736 6.74489 9.74145 6.74489C9.57553 6.74489 9.41124 6.77735 9.25796 6.84043C9.10468 6.9035 8.9654 6.99595 8.84808 7.1125C8.73076 7.22905 8.6377 7.36741 8.57421 7.51969C8.51071 7.67197 8.47804 7.83518 8.47804 8C8.47804 8.16482 8.51071 8.32803 8.57421 8.48031C8.6377 8.63259 8.73076 8.77095 8.84808 8.8875L11.7421 11.75H2.19186C1.85815 11.75 1.5381 11.8817 1.30213 12.1161C1.06616 12.3505 0.933594 12.6685 0.933594 13ZM17.291 0.5H4.70839C3.70725 0.5 2.74712 0.895088 2.03921 1.59835C1.33129 2.30161 0.933594 3.25544 0.933594 4.25V8C0.933594 8.33152 1.06616 8.64946 1.30213 8.88388C1.5381 9.1183 1.85815 9.25 2.19186 9.25C2.52557 9.25 2.84562 9.1183 3.08159 8.88388C3.31756 8.64946 3.45012 8.33152 3.45012 8V4.25C3.45012 3.91848 3.58269 3.60054 3.81866 3.36612C4.05463 3.1317 4.37468 3 4.70839 3H17.291C17.6248 3 17.9448 3.1317 18.1808 3.36612C18.4167 3.60054 18.5493 3.91848 18.5493 4.25V21.75C18.5493 22.0815 18.4167 22.3995 18.1808 22.6339C17.9448 22.8683 17.6248 23 17.291 23H4.70839C4.37468 23 4.05463 22.8683 3.81866 22.6339C3.58269 22.3995 3.45012 22.0815 3.45012 21.75V18C3.45012 17.6685 3.31756 17.3505 3.08159 17.1161C2.84562 16.8817 2.52557 16.75 2.19186 16.75C1.85815 16.75 1.5381 16.8817 1.30213 17.1161C1.06616 17.3505 0.933594 17.6685 0.933594 18V21.75C0.933594 22.7446 1.33129 23.6984 2.03921 24.4017C2.74712 25.1049 3.70725 25.5 4.70839 25.5H17.291C18.2922 25.5 19.2523 25.1049 19.9602 24.4017C20.6681 23.6984 21.0658 22.7446 21.0658 21.75V4.25C21.0658 3.25544 20.6681 2.30161 19.9602 1.59835C19.2523 0.895088 18.2922 0.5 17.291 0.5Z" fill="#192024"/>
                                </svg>
                            </span>
                        </Transition>
                        <Transition name="fade">
                            <span v-if="!state" :key="exitBtnLbl" class="exit-text">Выйти</span>
                        </Transition>
                    </button>
                </div>
            </div>
        </TransitionGroup>
        <div class="chat-body">

        </div>
    </div>
</template>

<script setup>
import { ref, Transition } from 'vue';

let state = 0;
let buttonsTemplats = ref([
    'info', 't1',
    'exit', 't2', 
]);

document.body.onclick = ()=> {
    state = !state;
    if (state) {
        buttonsTemplats.value = [
            'info', 'exit',
            't1', 't2', 
        ];
        document.getElementsByClassName('ride-info-body')[0].style.width = '158px';
        document.getElementsByClassName('ride-info-body')[0].style.minHeight = '40px';
        document.getElementsByClassName('exit-button')[0].style.width = '158px';
        document.getElementsByClassName('exit')[0].style.borderRadius = '15px';
    }
    else {
        buttonsTemplats.value = [
            'info', 't1',
            'exit', 't2', 
        ];
        document.getElementsByClassName('ride-info-body')[0].style.width = '320px';
        document.getElementsByClassName('ride-info-body')[0].style.minHeight = '192px';
        document.getElementsByClassName('exit-button')[0].style.width = '320px';
        document.getElementsByClassName('exit')[0].style.borderRadius = '200px';
    }
};

</script>

<style scoped>
.back-light {
    position: absolute;
    height: 390px;
    width: 100vw;
    inset: 0;
    margin: auto auto 0 auto;
    z-index: -1;
    overflow: hidden;
}

.page-body {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    top: 90px;
    bottom: 35px;
}

.rooms-num {
    color: white;
    opacity: 0.5;
    font-weight: 600;
    font-size: 16px;
}

.add-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    height: 22px;
    margin-bottom: 10px;
}

.dep-time-date {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    height: 22px;
}

.dep-icon {
    width: 21px;
    height: 21px;
}

.dep-text {
    color: #4FC0FF;
    font-size: 20px;
    font-weight: bold;
}

.room-body {
    width: 320px;
    grid-template-columns: repeat(2, minmax(0, max-content));
    grid-template-rows: min-content min-content;
    display: grid;
    gap: 5px 4px;
    height: fit-content;
    margin-bottom: 5px;
}

.ride-info-body {
    width: 320px;
    min-height: 192px;
    height: fit-content;
    transition: all 500ms ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.driver-info {
    width: 272px;
    min-height: 84px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.avatar {
    height: 80px;
    width: 80px;
    background-color: gray;
    border-radius: 50%;
}

.main {
    width: 170px;
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

.driver-name {
    font-size: 18px;
    font-weight: bold;
}

.car-name {
    font-size: 14px;
    font-weight: 600;
}

.number-color {
    height: 20px;
    display: flex;
    flex-direction: row;
}

.car-number {
    width: 63px;
    height: 20px;
    font-size: 14px;
    font-weight: bold;
    border: 1px black solid;
    border-radius: 44px;
    text-align: center;
    box-sizing: border-box;
}

.car-color {
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
}

.destinations {
    height: fit-content;
    min-height: 45px;
    width: 270px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
}

.from-to-title {
    color: #4FC0FF;
    font-size: 12px;
    font-weight: bold;
}

.from-to-text {
    font-size: 14px;
    font-weight: 600;
}

.dashed-line {
    width: 275px;
    border: 1px #7A7A7A dashed;
    margin: 10px auto;
}

.counter-price-body {
    width: 270px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.counter-body, .price-body {
    min-width: 70px;
    width: fit-content;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}


.passengers-icon {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
}

.counter-price-text {
    font-size: 20px;
    font-weight: bold;
}

.per-unit {
    color: #8F9395;
    font-size: 14px;
    font-weight: 600;
}

.exit-button {
    position: relative;
    width: 320px;
    height: 40px;
    border-radius: 200px;
    background-color: #4FC0FF;
    border: 0;
    transition: all 500ms ease;
}

.exit-icon {
    position: absolute;
    width: 20px;
    height: 25px;
    inset: 0;
    margin: auto;
}

.exit-text {
    font-size: 20px;
    font-weight: 600;
    font-family: 'Open Sans';
}

.grid-item {
    border-radius: 200px;
    transition: all 500ms ease;
}

.rooms-elem {
    border-radius: 200px;
    height: fit-content;
    width: fit-content;
    background: white;
    transition: all 500ms ease;
}

.exit {
    border-radius: 200px;
    background-color: #4FC0FF;
    transition: all 500ms ease;
}

.info {
    border-radius: 15px;
}

.chat-body {
    position: relative;
    width: 320px;
    height: 100%;
    background: white;
    border-radius: 15px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
