<template>
    <div class="profile-settings-body">
        <div class="avatar">
            <div class="user-avatar"></div>
            <svg  class="change-avatar" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14" fill="white"/>
                <path d="M15 30C6.70588 30 0 23.2941 0 15C0 6.70588 6.70588 0 15 0C23.2941 0 30 6.70588 30 15C30 23.2941 23.2941 30 15 30ZM15 1.76471C7.67647 1.76471 1.76471 7.67647 1.76471 15C1.76471 22.3235 7.67647 28.2353 15 28.2353C22.3235 28.2353 28.2353 22.3235 28.2353 15C28.2353 7.67647 22.3235 1.76471 15 1.76471Z" fill="#263036"/>
                <path d="M7.05859 14.1177H22.9409V15.8824H7.05859V14.1177Z" fill="#263036"/>
                <path d="M14.1172 7.05859H15.8819V22.9409H14.1172V7.05859Z" fill="#263036"/>
            </svg>
        </div>
        <div class="input-fields-body">
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
            <DefaultInputField 
                class="inuptField"
                v-model="carModel" 
                title="Машина" 
                placeholder="Toyota Mark 2" 
                :validLength="2" 
                :maxLength="23"
                purpose="car" 
                inputFieldType="text"/>
            <div class="small-inputs">
                <DefaultInputField 
                    class="inuptField"
                    v-model="carNumber" 
                    title="Цвет" 
                    placeholder="E663KX" 
                    :validLength="6" 
                    :maxLength="6"
                    purpose="number"
                    inputFieldType="text"  
                    specialStyle="small rounded"/>
                <DefaultInputField 
                    class="smallInput inuptField"
                    v-model="carModel" 
                    title="Машины" 
                    placeholder="Toyota Mark 2" 
                    :validLength="2" 
                    :maxLength="6"
                    purpose="color" 
                    inputFieldType="select" 
                    specialStyle="small rounded"/>
            </div>
            <button class="settings-submit-button">Сохранить</button>
            <div class="delete-account">Удалить аккаунт</div>
        </div>
    </div>
</template>

<script setup>
import DefaultInputField from '@/components/inputfields/DefaultInputField.vue';
import { ref } from 'vue';

let userFirstName = ref('Платон')
let userSurName = ref('Пряженников')
let carModel = ref('Toyota Mark 2')
let carNumber = ref('E663KX')
</script>

<style scoped>
.profile-settings-body {
    position: absolute;
    width: 324px;
    height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.avatar {
    position: relative;
    width: 100px;
    height: 104px;
}

.user-avatar {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: gray;
}

.change-avatar { 
    position: absolute;
    height: 30px;
    width: 30px;
    bottom: 0;
    right: 0;
}

.input-fields-body {
    width: 300px;
    height: 435px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.small-inputs {
    width: 300px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.settings-submit-button {
    width: 300px;
    height: 40px;
    background-color: #4FC0FF;
    border: 0;
    border-radius: 200px;
    color: white;
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 600;
}

.inuptField {
    align-self: self-end;
}

.smallInput {
    justify-self: end;
}

.delete-account {
    width: fit-content;
    height: fit-content;
    color: red;
    font-size: 18px;
    font-weight: 600;
    text-decoration: 1px underline;
}
</style>
