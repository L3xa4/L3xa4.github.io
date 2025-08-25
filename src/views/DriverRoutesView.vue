<template>
    <AppHeader text="Предложения водителей"></AppHeader>
    <Routes></Routes>
    <AppFooter/>
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
    <!-- <RouterView v-slot="{ Component, route }">
        <Transition :name="route.meta.transition" mode="out-in">
                <component
                    :is="Component"
                    :key="route.fullPath"
                    :class="route.meta.transition"
                />
        </Transition>
    </RouterView> -->
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import Routes from '../components/Routes.vue';

export default {
    components: {Routes, AppHeader, AppFooter}
}
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

.settings {
    position: absolute;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgb(31, 39, 44, 0.3);
    backdrop-filter: blur(35px);
}

.settings-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.settings-enter-active {
    transition: all 0.4s ease;
}
.settings-leave-to {
    transform: translateX(-50%);
    opacity: 0;
}
.settings-leave-active {
    transition: all 0.3s ease;
}
</style>

