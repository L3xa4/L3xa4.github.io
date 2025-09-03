<template>
    <div class="registration-body">
        <img src="../assets/img/blueLunaLogo.svg" alt="" width="166px" height="60px" class="luna-logo"/>
        <div class="photo">
            <div class="avatar-body">
                <input class="avatar" type="file" accept="image/*" capture="environment" name="photo"/>
                <svg class="add-btn" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30.0376C6.70588 30.0376 0 23.3317 0 15.0376C0 6.74348 6.70588 0.0375977 15 0.0375977C23.2941 0.0375977 30 6.74348 30 15.0376C30 23.3317 23.2941 30.0376 15 30.0376ZM15 1.8023C7.67647 1.8023 1.76471 7.71407 1.76471 15.0376C1.76471 22.3611 7.67647 28.2729 15 28.2729C22.3235 28.2729 28.2353 22.3611 28.2353 15.0376C28.2353 7.71407 22.3235 1.8023 15 1.8023Z" fill="#21262D"/>
                    <path d="M7.05859 14.1553H22.9409V15.92H7.05859V14.1553Z" fill="#21262D"/>
                    <path d="M14.1172 7.09644H15.8819V22.9788H14.1172V7.09644Z" fill="#21262D"/>
                </svg>
            </div>
            <div class="avatar-text">Фотография помогает идентифицировать вас</div>
        </div>
        <DefaultInputField
            class="inuptField"
            v-model="userFirstName" 
            title="Имя" 
            placeholder="Иван" 
            :validLength="2" 
            :maxLength="23"
            purpose="name"
            inputFieldType="text"/>
        <DefaultInputField
            class="inuptField"
            v-model="userSurName" 
            title="Фамилия" 
            placeholder="Иванов" 
            :validLength="2" 
            :maxLength="23"
            purpose="name"
            inputFieldType="text"/>
        <div class="telegram-id">{{ telegramId }}</div>
        <button class="submit-button">Далее</button>
    </div>
</template>

<script setup>
import DefaultInputField from '@/components/inputfields/DefaultInputField.vue';
import { ref } from 'vue';

let userFirstName = ref('');
let userSurName = ref('');
let telegramId = ref('@platoska1');
</script>

<style scoped>
.registration-body {
    width: 320px;
    height: 730px;
    margin: 77px auto 38px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
} 

.photo {
    width: 183px;
    height: 152px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
    
.avatar-body {
    position: relative;
    width: 100px;
    height: 104px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #D9D9D9;
}

.add-btn {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 0;
    right: 0;
    background-color: white;
    border-radius: 50%;
}

.avatar-text {
    margin-top: 16px;
    font-size: 16px;
    text-align: center;
}

.inuptField {
    margin-top: 30px;
}

.telegram-id {
    width: 180px;
    height: 40px;
    background-color: #C9E1FF;
    border-radius: 15px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    color: #8F9395;
    font-size: 16px;    
    margin-top: 40px;
}

.submit-button {
    position: absolute;
    width: 320px;
    height: 40px;
    border: 0;
    border-radius: 200px;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    bottom: 40px;
}
</style>