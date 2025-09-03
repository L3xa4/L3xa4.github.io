<template>
    <div class="switch-container">
        <label class="mode-switch">
            <input 
            type="checkbox" 
            class="mode-switch-input" 
            :checked="modelValue" 
            @change="onChange"/>
            <span class="mode-switch-slider"></span>
        </label>
    </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
        type: Boolean,
        required: true
    },
  requestLink: {
        type: String,
        required: false
    },
});
const emit = defineEmits(['update:modelValue']);

function onChange(event) {
  emit('update:modelValue', event.target.checked);
}
</script>

<style scoped>
.switch-container {
    width: 50px;
    height: 26px;
}

.mode-switch { 
    display: inline-block;
    position: relative;
    width: 50px;
    height: 26px;
}

.mode-switch .mode-switch-input {
    height: 0;
    width: 0;
    opacity: 0;
    display: block;
}

.mode-switch .mode-switch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 30px;
    border: 2px #4FC0FF solid;
    transition: 0.4s;
    box-sizing: border-box;
}

.mode-switch .mode-switch-slider::before {

    content: "";
    position: absolute;
    cursor: pointer;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #4FC0FF;
    transition: 0.4s;
    inset: 0;
    margin: auto auto auto 5px;
}

.mode-switch-input:checked ~ .mode-switch-slider {
    background-color: #4FC0FF;
}

.mode-switch-input:checked + .mode-switch-slider::before {
    background-color: #1F272C;
    opacity: 0.8;
    animation: moveBall 0.2s linear;
    transform: translateX(150%);
}

@keyframes moveBall {
    0% {
    transform: translateX(0) scale(1, 1);
    }
    25% {
    transform: translateX(40%) scale(1.3, 0.7);
    }
    100% {
    transform: translateX(150%) scale(1, 1);
    }
}

</style>
