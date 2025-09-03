<template>
    <div class="settings-body">
        <div class="settings-title">{{ $route.name }}</div>
        <RouterView v-slot="{ Component, route }" :key="'settingsRouter'">
            <Transition name="settings">
                <div :key="route.fullPath" :class="['route-wrapper', route.meta.transition]" v-if="Component">
                    <component :is="Component" />
                </div>
            </Transition>
        </RouterView>
    </div>
</template>

<script>
import { ref, Transition } from 'vue';
</script>

<style scoped>
.settings-body {
    width: 324px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 90px auto auto auto
}

.settings-title {
    font-size: 21px;
    font-weight: 600;
}

.route-wrapper {
    position: absolute;
    height: 100%;
    width: 324px;
    margin-top: 64px;
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
</style>