<template>
    <TransitionGroup name="grid" class="room-body" tag="div">
        <div v-for="item in buttonsTemplats" :key="item" class="grid-item" :class="['expanded', item + '0']">
            <div v-if="item === 'info'" :class="['rooms-elem', item, 'expanded', 'anim']" id="info-button"></div>
            <div v-else-if="item === 'exit'" :class="['rooms-elem', item, 'expanded', 'anim']" id="exit-button"></div>
            <div v-else-if="item === 'chat'" :class="['rooms-elem', item, 'expanded', 'anim']"></div>
        </div>
    </TransitionGroup>
</template>

<script setup>
import { ref } from 'vue';

let state = 0;
const buttonsTemplats = ref([
    'info',
    'exit', 
    'chat',
]);

// document.body.onclick = ()=> {
//     state = !state;
//     let infoButton = document.getElementById('info-button');
//     let exitButton = document.getElementById('exit-button');
//     let chat = document.getElementsByClassName('chat')[0];
//     exitButton.classList.add('anim');
//     infoButton.classList.add('anim');
//     chat.classList.add('anim');
//     if (state) {
//         infoButton.classList.remove('expanded');
//         exitButton.classList.remove('expanded');
//         exitButton.style.transform = 'translateY(-45px)';
//         chat.style.transform = 'translateY(-45px)';
//         infoButton.style.minHeight = '40px';
//         chat.style.height = '106.5%';
//         setTimeout(() => {
//             infoButton.classList.remove('anim');
//             exitButton.classList.remove('anim');
//             chat.classList.remove('anim');
//             exitButton.style.transform = 'none';
//             chat.style.transform = 'none';
//             chat.style.height = '100%';
//             document.getElementsByClassName('info0')[0].classList.remove('expanded');
//             document.getElementsByClassName('exit0')[0].classList.remove('expanded');
//             exitButton.classList.add('full-size');
//             infoButton.classList.add('full-size');
//             document.getElementsByClassName('room-body')[0].style.gridTemplateRows = '40px auto';
//         }, 500);
//     }
//     else {
//         exitButton.classList.add('expanded');
//         infoButton.classList.add('expanded');
//         exitButton.classList.add('full-size');
//         infoButton.classList.add('full-size');
//         infoButton.style.minHeight = '172px';
//         exitButton.style.transform = 'translateY(177px)';
//         chat.style.transform = 'translateY(177px)';
//         chat.style.height = '94%';
//         infoButton.style.width = '200%';
//         exitButton.style.width = '200%';
//         setTimeout(() => {
//             infoButton.classList.remove('anim');
//             exitButton.classList.remove('anim');
//             chat.classList.remove('anim');
//             exitButton.style.transform = 'none';
//             chat.style.transform = 'none';
//             chat.style.height = '100%';
//             document.getElementsByClassName('info0')[0].classList.add('expanded');
//             document.getElementsByClassName('exit0')[0].classList.add('expanded');
//             document.getElementsByClassName('room-body')[0].style.gridTemplateRows = 'max-content 40px minmax(300px, auto)';
//         }, 500);
//     }
// };
</script>

<style scoped>
.room-body {
    position: absolute;
    width: 85vw;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: max-content 40px minmax(300px, auto);
    display: grid;
    inset: 0;
    margin: 100px auto 45px auto;
    gap: 5px 4px;
    transition: all 500ms ease;
    grid-template-areas: "info exit"
                         /* "exit" */
                         "chat";
}

.grid-item {
    border-radius: 200px;
    transition: all 500ms ease;
}

.rooms-elem {
    border-radius: 200px;
    height: 100%;
    width: 50%;
    background: white;
}

.info {
    min-height: 172px;
    height: fit-content;
}

.info0 {
    grid-area: info;
}

.exit {
    border-radius: 200px;
    background-color: #4FC0FF;
}

.exit0 {
    display: flex;
    justify-content: end;
    grid-area: exit;
}

.chat {
    border-radius: 15px;
    grid-column: 1 / -1;
}

.chat0 {
    grid-area: chat;
}

.expanded {
    border-radius: 15px;
    grid-column: 1 / -1;
    width: 100%;
}

.full-size {
    width: 100%;
    transform: none;
}

.anim {
    transition: all 500ms ease;
}
</style>
