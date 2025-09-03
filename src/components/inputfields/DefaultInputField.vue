<template>
    <div class="input-field-body" :class="specialStyle">
        <label class="input-field-label" for="input" :class="specialStyle">
          {{ title }}
        </label>
        <input type="text" :value="modelValue" 
          @input="onInput" class="input-field" 
          :placeholder="placeholder" :maxlength="maxLength" 
          v-if="inputFieldType != 'select'" :class="specialStyle"
          id="input"/>
        <select class="input-field" :class="specialStyle" v-if="inputFieldType == 'select'" id="input">
          <option value="Белый">Белый</option>
          <option value="Желтый">Желтый</option>
          <option value="Зеленый">Зеленый</option>
          <option value="Коричневый">Корич</option>
          <option value="Красный">Красный</option>
          <option value="Оранжевый">Оранж</option>
          <option value="Серый">Серый</option>
          <option value="Синий">Синий</option>
          <option value="Фиолетовый">Фиол</option>
          <option value="Черный">Черный</option>
        </select>
        <TransitionGroup name="slide-fade">
          <div v-for="er in errors" :key="er" class="error-message" v-if="errors">{{ er }}</div>
        </TransitionGroup>
    </div>
</template>
<script setup>
import { ref, Transition, TransitionGroup } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  validLength: {
    type: Number,
    required: true
  },
  maxLength: {
    type: Number,
    required: true
  },
  errorMessage: {
    type: String, 
    required: false
  },
  purpose: {
    type: String,
    required: true
  },
  inputFieldType: {
    type: String,
    required: true
  },
  specialStyle: {
    type: String,
    required: false
  },
  modelValue: {
        type: String,
        required: true
    },
  requestLink: {
        type: String,
        required: false
    },
});

const emit = defineEmits(['update:modelValue']);
const allowedSyms = {
  "name": /[^А-я]/g, 
  "car": /[^a-zA-Z0-9 ]/g, 
  "number": /[^АВЕКМНОРСТУХABEKMHOPCTYX0-9]/gi
};
let errors = ref(['', '']);

function onInput(event) {
  UpperCase(event);
  wrongSym(event);
  checkLength(event);
  if(errors.value[0] + errors.value[1]) {
    event.target.style.borderColor = 'red';
  }
  else {
    event.target.style.borderColor = 'black';
  }
  setTimeout(() => {
    if(errors.value[0] + errors.value[1]) {
      event.target.style.borderColor = 'red';
    }
    else {
      event.target.style.borderColor = 'black';
    }
  }, 600);
  emit('update:modelValue', event.target.value);
}

function wrongSym(event) {
  let oldTargetValue = event.target.value;
  event.target.value = event.target.value.replace(allowedSyms[props.purpose], ''); 
  if(event.target.value != oldTargetValue) {
    errors.value[0] = 'недопустимый символ';
    shakeField(event);
    setTimeout(() => {
      errors.value[0] = '';
    }, 600);
  }
}

let UpperCase = (event) => {
  if(props.purpose == 'number') event.target.value = event.target.value.toUpperCase();
};

let checkLength = (event) => {
  if(event.target.value.length < props.validLength) {
    errors.value[1] = props.errorMessage;
    shakeField(event);
  }
  else {
    errors.value[1] = '';
  }
};

let shakeField = (event) => {
  let inputFieldBody = event.target.parentNode;
  inputFieldBody.style.transform = 'translateX(5px)';
  setTimeout(() => {inputFieldBody.style.transform = 'translateX(-5px)'}, 200);
  setTimeout(() => {
    inputFieldBody.style.transform = 'translateX(0)';
  }, 400);
};
</script>

<style scoped>
input::placeholder {
  font-size: 16px;
  color: #8F9395;
  font-weight: 100;
}

select {
  background-color: white;
}

option {
  background-color: white;
}

.input-field-body {
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
}

.input-field-body.small {
  width: 130px;
  height: 62px;
}

.input-field {
  width: 100%;
  height: 23px;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  border-bottom: 1px black solid;
  outline: none;
  bottom: 0;
  box-sizing: border-box;
}

.input-field.small {
  height: 40px;
  min-height: 40px;
  width: 130px;
  text-align: center;
}

.input-field.rounded {
  border: 1px black solid;
  border-radius: 10px;
}

.input-field-label {
  font-size: 16px;
  font-weight: 500;
  font-family: 'Open Sans';
  height: 15px;
  margin-bottom: 15px;
}

.input-field-label.small {
  margin-bottom: 10px;
}

.error-message {
  color: red;
  font-size: 14px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
