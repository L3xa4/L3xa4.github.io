<template>
    <RouterView v-slot="{ Component, route }" :key="'mainRouter'">
        <Transition name="settings" mode="">
            <div :key="route.matched[0]?.path || route.path" :class="['route-wrapper', route.meta.transition, route.meta.background]" v-if="Component">
                <component :is="Component" />
            </div>
        </Transition>
    </RouterView>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Routes from './components/Routes.vue';
import { Transition } from 'vue';

export default {
    components: {Routes, AppHeader, AppFooter},
}
</script>

<style scoped>
.route-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.settings-enter-from {
    transform: translateX(50%);
    opacity: 0;
}
.settings-enter-active {
    transition: all 0.4s ease;
}
.settings-leave-to {
    transform: translateX(50%);
    opacity: 0;
}
.settings-leave-active {
    transition: all 0.3s ease;
}

.route-wrapper.white-background {
    background: white;
}
</style>
