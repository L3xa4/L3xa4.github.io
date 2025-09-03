<template>
    <div class="settings-buttons-body">
        <div class="profile-body">
            <div class="avatar-coinCounter">
                <div class="avatar"></div>
                <div class="coinCounter">
                    <div class="counterWrapper">2000</div>
                </div>
            </div>
            <div class="personal-data">
                <div class="user-full-name">Платон<br>Пряженников</div>
                <div class="car-model">Nissan Bluebird Sylphy</div>
                <div class="car-data">
                    <div class="car-data-text">E663KX</div>
                    <div class="car-data-text">Черный</div>
                </div>
            </div>
        </div>
        <div class="settings-line"></div>
        <div class="buttons-body">
            <RouterLink class="settings-param" to="/settings/profile">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.80518C8 6.74431 8.42143 5.72689 9.17157 4.97675C9.92172 4.2266 10.9391 3.80518 12 3.80518C13.0609 3.80518 14.0783 4.2266 14.8284 4.97675C15.5786 5.72689 16 6.74431 16 7.80518C16 8.86604 15.5786 9.88346 14.8284 10.6336C14.0783 11.3837 13.0609 11.8052 12 11.8052C10.9391 11.8052 9.92172 11.3837 9.17157 10.6336C8.42143 9.88346 8 8.86604 8 7.80518ZM8 13.8052C6.67392 13.8052 5.40215 14.332 4.46447 15.2696C3.52678 16.2073 3 17.4791 3 18.8052C3 19.6008 3.31607 20.3639 3.87868 20.9265C4.44129 21.4891 5.20435 21.8052 6 21.8052H18C18.7956 21.8052 19.5587 21.4891 20.1213 20.9265C20.6839 20.3639 21 19.6008 21 18.8052C21 17.4791 20.4732 16.2073 19.5355 15.2696C18.5979 14.332 17.3261 13.8052 16 13.8052H8Z" fill="#4FC0FF"/>
                </svg>
                <div class="param-text">Профиль</div>
            </RouterLink>
            <RouterLink class="settings-param" to="/settings/privacy">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3764_3997)">
                        <path d="M11.5 17.5671C12.0636 17.5671 12.6041 17.3463 13.0026 16.9534C13.4011 16.5605 13.625 16.0275 13.625 15.4718C13.625 14.9162 13.4011 14.3832 13.0026 13.9903C12.6041 13.5974 12.0636 13.3766 11.5 13.3766C10.9364 13.3766 10.3959 13.5974 9.9974 13.9903C9.59888 14.3832 9.375 14.9162 9.375 15.4718C9.375 16.0275 9.59888 16.5605 9.9974 16.9534C10.3959 17.3463 10.9364 17.5671 11.5 17.5671ZM17.875 8.13851C18.4386 8.13851 18.9791 8.35926 19.3776 8.75219C19.7761 9.14512 20 9.67806 20 10.2337V20.7099C20 21.2656 19.7761 21.7986 19.3776 22.1915C18.9791 22.5844 18.4386 22.8052 17.875 22.8052H5.125C4.56141 22.8052 4.02091 22.5844 3.6224 22.1915C3.22388 21.7986 3 21.2656 3 20.7099V10.2337C3 9.67806 3.22388 9.14512 3.6224 8.75219C4.02091 8.35926 4.56141 8.13851 5.125 8.13851H6.1875V6.04327C6.1875 4.65404 6.74721 3.32171 7.74349 2.33938C8.73978 1.35704 10.091 0.805176 11.5 0.805176C12.1976 0.805176 12.8885 0.940663 13.533 1.2039C14.1775 1.46714 14.7632 1.85298 15.2565 2.33938C15.7498 2.82578 16.1411 3.40322 16.4081 4.03874C16.6751 4.67425 16.8125 5.35539 16.8125 6.04327V8.13851H17.875ZM11.5 2.90041C10.6546 2.90041 9.84387 3.23154 9.2461 3.82094C8.64832 4.41034 8.3125 5.20973 8.3125 6.04327V8.13851H14.6875V6.04327C14.6875 5.20973 14.3517 4.41034 13.7539 3.82094C13.1561 3.23154 12.3454 2.90041 11.5 2.90041Z" fill="#4FC0FF"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_3764_3997">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.805176)"/>
                        </clipPath>
                    </defs>
                </svg>
                <div class="param-text">Настройки приватности</div>
            </RouterLink>
            <RouterLink class="settings-param" to="/settings/payment">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 5.30518C4.25544 5.30518 3.30161 5.70026 2.59835 6.40353C1.89509 7.10679 1.5 8.06061 1.5 9.05518V9.80518H22.5V9.05518C22.5 8.06061 22.1049 7.10679 21.4016 6.40353C20.6984 5.70026 19.7446 5.30518 18.75 5.30518H5.25ZM22.5 11.3052H1.5V16.5552C1.5 17.5497 1.89509 18.5036 2.59835 19.2068C3.30161 19.9101 4.25544 20.3052 5.25 20.3052H18.75C19.7446 20.3052 20.6984 19.9101 21.4016 19.2068C22.1049 18.5036 22.5 17.5497 22.5 16.5552V11.3052ZM15.75 15.8052H18.75C18.9489 15.8052 19.1397 15.8842 19.2803 16.0248C19.421 16.1655 19.5 16.3563 19.5 16.5552C19.5 16.7541 19.421 16.9449 19.2803 17.0855C19.1397 17.2262 18.9489 17.3052 18.75 17.3052H15.75C15.5511 17.3052 15.3603 17.2262 15.2197 17.0855C15.079 16.9449 15 16.7541 15 16.5552C15 16.3563 15.079 16.1655 15.2197 16.0248C15.3603 15.8842 15.5511 15.8052 15.75 15.8052Z" fill="#4FC0FF"/>
                </svg>
                <div class="param-text">Способы оплаты</div>
            </RouterLink>
            <RouterLink class="settings-param" to="/settings/instructions">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.48 4.27361C7.78641 3.46502 5.41922 3.06892 2.25 3.05486C1.95111 3.0508 1.65809 3.13795 1.41 3.3047C1.20637 3.44234 1.03968 3.62791 0.924597 3.84508C0.809512 4.06226 0.749555 4.30439 0.750002 4.55017V17.9611C0.750002 18.8677 1.395 19.5516 2.25 19.5516C5.58141 19.5516 8.92313 19.8628 10.9247 21.7547C10.9521 21.7807 10.9865 21.7981 11.0237 21.8047C11.0608 21.8113 11.0991 21.8068 11.1338 21.7918C11.1685 21.7769 11.1979 21.752 11.2186 21.7204C11.2393 21.6888 11.2502 21.6518 11.25 21.6141V5.81205C11.2501 5.70544 11.2272 5.60006 11.1831 5.50302C11.1389 5.40598 11.0745 5.31955 10.9941 5.24955C10.5356 4.85759 10.0263 4.52932 9.48 4.27361ZM22.59 3.3033C22.3418 3.13696 22.0488 3.05029 21.75 3.05486C18.5808 3.06892 16.2136 3.46314 14.52 4.27361C13.9737 4.52885 13.4643 4.85648 13.0055 5.24767C12.9252 5.31777 12.8609 5.40424 12.8168 5.50126C12.7728 5.59828 12.75 5.70361 12.75 5.81017V21.6131C12.75 21.6494 12.7607 21.6849 12.7807 21.7151C12.8008 21.7454 12.8293 21.769 12.8628 21.7831C12.8962 21.7971 12.9331 21.801 12.9687 21.7942C13.0044 21.7874 13.0372 21.7702 13.0631 21.7449C14.2664 20.5495 16.3781 19.5502 21.7519 19.5506C22.1497 19.5506 22.5312 19.3926 22.8125 19.1113C23.0938 18.83 23.2519 18.4485 23.2519 18.0506V4.55064C23.2524 4.30437 23.1923 4.06175 23.0769 3.84421C22.9615 3.62667 22.7942 3.4409 22.59 3.3033Z" fill="#4FC0FF"/>
                </svg>
                <div class="param-text">Инструкция</div>
            </RouterLink>
            <RouterLink class="settings-param" to="/settings/about">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 9.80469H11V7.80469H13M13 17.8047H11V11.8047H13M12 2.80469C10.6868 2.80469 9.38642 3.06335 8.17317 3.56589C6.95991 4.06844 5.85752 4.80503 4.92893 5.73362C3.05357 7.60898 2 10.1525 2 12.8047C2 15.4569 3.05357 18.0004 4.92893 19.8758C5.85752 20.8043 6.95991 21.5409 8.17317 22.0435C9.38642 22.546 10.6868 22.8047 12 22.8047C14.6522 22.8047 17.1957 21.7511 19.0711 19.8758C20.9464 18.0004 22 15.4569 22 12.8047C22 11.4915 21.7413 10.1911 21.2388 8.97785C20.7362 7.7646 19.9997 6.66221 19.0711 5.73362C18.1425 4.80503 17.0401 4.06844 15.8268 3.56589C14.6136 3.06335 13.3132 2.80469 12 2.80469Z" fill="#4FC0FF"/>
                </svg>
                <div class="param-text">О нас</div>
            </RouterLink>
        </div>
        <div class="settings-line"></div>
        <div class="notifications-body">
            <div class="notification-param">
                <div class="notification-title">Уведомления от <b>водительских</b> комнат</div>
                <ToggleSwitch class="toggle-switch" v-model="driversRoomsNotification"/>
            </div>
            <div class="notification-param">
                <div class="notification-title">Уведомления от <b>пассажирских</b> комнат</div>
                <ToggleSwitch class="toggle-switch" v-model="passengersRoomsNotification"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ToggleSwitch from '@/components/inputfields/ToggleSwitch.vue';

let driversRoomsNotification = ref(false);
let passengersRoomsNotification = ref(false);

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
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-body {
    width: 308px;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

}

.avatar-coinCounter {
    width: 89px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.avatar {
    height: 72px;
    width: 72px;
    background-color: grey;
    border-radius: 50%;
}

.coinCounter {
    width: 89px;
    height: 33px;
    background-image: url('../assets/img/moonCoinCounter.svg');
    display: flex;
    align-items: center;
    justify-content: end;
}

.counterWrapper {
    font-size: 18px;
    font-weight: bold;
    width: 57px;
    text-align: center;
}

.personal-data {
    width: 198px;
    height: 105px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

.user-full-name {
    width: 188px;
    height: 53px;
    font-size: 24px;
    font-weight: bold;
    line-height: 107%;
}

.car-model {
    font-size: 17px;
    font-weight: 600;
}

.car-data {
    width: 156px;
    height: 19px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.car-data-text {
    font-size: 18px;
    font-weight: 600;
    text-align: start;
}

.settings-line {
    width: 224px;
    height: 1px;
    background-color: #DADADA;
    margin: 20px 0;
}

.buttons-body {
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

.settings-param {
    width: 100%;
    height: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: black;
}

.settings-param:visited {
    color: black;
}

.param-text {
    font-size: 18px;
    margin-left: 25px;
}

.notifications-body {
    width: 100%;
    height: 101px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.notification-param {
    width: 324px;
    height: 37px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.notification-title {
    font-size: 18px;
}
</style>