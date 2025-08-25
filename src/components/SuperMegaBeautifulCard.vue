<template>
    <a class="card-body">
        <div class="add-info">
            <div class="add-container">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 21C4.70085 21 0 16.2991 0 10.5C0 4.70085 4.70085 0 10.5 0C16.2991 0 21 4.70085 21 10.5C21 16.2991 16.2991 21 10.5 21ZM10.5 18.9C12.7278 18.9 14.8644 18.015 16.4397 16.4397C18.015 14.8644 18.9 12.7278 18.9 10.5C18.9 8.27218 18.015 6.13561 16.4397 4.5603C14.8644 2.985 12.7278 2.1 10.5 2.1C8.27218 2.1 6.13561 2.985 4.5603 4.5603C2.985 6.13561 2.1 8.27218 2.1 10.5C2.1 12.7278 2.985 14.8644 4.5603 16.4397C6.13561 18.015 8.27218 18.9 10.5 18.9ZM11.55 10.5H15.75V12.6H9.45V5.25H11.55V10.5Z" fill="white"/>
                </svg>
                <div class="add-text">12:10</div>
            </div>
            <div class="add-container">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 11H16V16H11V11ZM18 2H17V0H15V2H7V0H5V2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H18C19.1 20 20 19.1 20 18V4C20 2.9 19.1 2 18 2ZM18 4V6H4V4H18ZM4 18V8H18V18H4Z" fill="white"/>
                </svg>
                <div class="add-text">21.10</div>
            </div>
        </div>
        <div class="route-info">
            <div class="dest-point">
                <div class="dest-title">Откуда</div>
                <div class="dest-text">Вторая речка (Чкалова, Магнитогорская, через Гоголя)"</div>
            </div>
            <div class="dest-point">
                <div class="dest-title">Куда</div>
                <div class="dest-text">Вторая речка (Чкалова, Магнитогорская, через Гоголя)"</div>
            </div>
        </div>
        <div class="price-passengers">
            <div class="price">
                <div class="price-text">100₽</div>
                <div class="per-unit">/чел.</div>
            </div>
            <div class="passengers">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.501 12.8125C11.8649 12.8117 13.2072 12.9715 14.5293 13.293C15.8494 13.6139 17.154 14.0942 18.4434 14.7363C18.9105 14.9785 19.2843 15.326 19.5742 15.7979C19.859 16.2615 20.0007 16.7637 20 17.3242V20H1V17.3252C1 16.7632 1.14215 16.2615 1.42676 15.7988C1.68123 15.3852 1.99989 15.0663 2.38965 14.8301L2.56055 14.7344C3.84842 14.0916 5.15148 13.6128 6.46973 13.2939C7.7927 12.974 9.1361 12.8133 10.501 12.8125ZM10.5 1C11.6764 1 12.6589 1.40694 13.501 2.24902C14.3431 3.09111 14.75 4.07358 14.75 5.25C14.75 6.42642 14.3431 7.40889 13.501 8.25098C12.6589 9.09306 11.6764 9.5 10.5 9.5C9.32358 9.5 8.34111 9.09306 7.49902 8.25098C6.65694 7.40889 6.25 6.42643 6.25 5.25C6.25 4.07357 6.65694 3.09111 7.49902 2.24902C8.34111 1.40694 9.32358 1 10.5 1Z" stroke="white" stroke-width="2"/>
                </svg>
                <div class="passengers-count">0/3</div>
            </div>
        </div>
        <div class="comment" v-if="comment">*{{ comment }}</div>
    </a>
</template>

<script setup>
defineProps({
    id: Number,
    from: String,
    to: String, 
    time: String,
    date: String,
    price: Number,
    curPassengers: Number,
    maxPassengers: Number,
    comment: String,
})
</script>

<style scoped>
.card-body {
    width: 320px;
    height: fit-content;
    min-height: 190px;
    border-radius: 10px;
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 1rem rgb(0, 0, 0, .9);
    background-color: rgb(255, 255, 255, .03);
    backdrop-filter: blur(4px);
}

.add-info {
    width: 280px;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.add-container {
    width: fit-content;
    height: 21px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.add-text {
    font-weight: bold;
    margin-left: 5px;
}

.route-info {
    width: 280px;
    height: fit-content;
    min-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.dest-point {
    width: 140px;
    height: fit-content;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.dest-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
}

.dest-text {
    font-size: 14px;
    font-weight: 600;
    height: fit-content;
}

.price-passengers {
    width: 280px;
    height: 21px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    margin-bottom: 20px;
}

.price {
    width: 78px;
    height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
}

.price-text {
    font-size: 21px;
    font-weight: bold;
    height: 25px;
}

.per-unit {
    font-size: 12px;
    font-weight: 600;
}

.passengers {
    width: 61px;
    height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.passengers-count {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 6%;
    height: fit-content;
}

.comment {
    height: fit-content;
    max-width: 280px;
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    margin-bottom: 10px;
}
</style>
