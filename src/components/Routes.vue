<template>
    <div class="cards-body">
        <RouteCard id="1" from="Вторая речка ( Чкалова, Магнитогорская, через Гоголя)" to="Вторая речка ( Чкалова, Магнитогорская, через Гоголя)" time="7:30" date="21.11" price="100" curPassengers="0" maxPassengers="3" comment="еду туда сюда назад вправо влево вперед вниз"></RouteCard>
        <RouteCard id="1" from="Вторая речка ( Чкалова, Магнитогорская, через Гоголя)" to="Вторая речка ( Чкалова, Магнитогорская, через Гоголя)" time="7:30" date="21.11" price="100" curPassengers="0" maxPassengers="3"></RouteCard>
        <RouteCard id="1" from="Вторая речка " to="Гоголя" time="7:30" date="21.11" price="100" curPassengers="0" maxPassengers="3"></RouteCard>
        <RouteCard id="1" from="Вторая речка " to="Гоголя" time="7:30" date="21.11" price="100" curPassengers="0" maxPassengers="3"></RouteCard>
        <RouteCard id="1" from="Вторая речка " to="Гоголя" time="7:30" date="21.11" price="100" curPassengers="0" maxPassengers="3"></RouteCard>
        <Plug/>
    </div>
</template>

<script>
import RouteCard from './RouteCard.vue';
import Plug from './Plug.vue';

export default {
    components: {RouteCard, Plug}    
}
</script>

<style scoped>
.cards-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    inset: 0;
    margin: auto;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.cards-body::-webkit-scrollbar {
    width: 0;
    height: 0;
}
</style>
