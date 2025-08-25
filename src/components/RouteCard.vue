<template>
    <a class="card-body" href="room">
        <div class="add-info">
            <div class="info">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 21C4.70085 21 0 16.2991 0 10.5C0 4.70085 4.70085 0 10.5 0C16.2991 0 21 4.70085 21 10.5C21 16.2991 16.2991 21 10.5 21ZM10.5 18.9C12.7278 18.9 14.8644 18.015 16.4397 16.4397C18.015 14.8644 18.9 12.7278 18.9 10.5C18.9 8.27218 18.015 6.13561 16.4397 4.5603C14.8644 2.985 12.7278 2.1 10.5 2.1C8.27218 2.1 6.13561 2.985 4.5603 4.5603C2.985 6.13561 2.1 8.27218 2.1 10.5C2.1 12.7278 2.985 14.8644 4.5603 16.4397C6.13561 18.015 8.27218 18.9 10.5 18.9ZM11.55 10.5H15.75V12.6H9.45V5.25H11.55V10.5Z" fill="#4FC0FF"/>
                </svg>
                <div class="info-text">{{ time }}</div>
            </div>
            <div class="info">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12.1H15.5556V17.6H10V12.1ZM17.7778 2.2H16.6667V0H14.4444V2.2H5.55556V0H3.33333V2.2H2.22222C1 2.2 0 3.19 0 4.4V19.8C0 21.01 1 22 2.22222 22H17.7778C19 22 20 21.01 20 19.8V4.4C20 3.19 19 2.2 17.7778 2.2ZM17.7778 4.4V6.6H2.22222V4.4H17.7778ZM2.22222 19.8V8.8H17.7778V19.8H2.22222Z" fill="#4FC0FF"/>
                </svg>
                <div class="info-text">{{ date }}</div>
            </div>
        </div>
        <div class="main-body">
            <div class="route-info">
                <div class="dest-point">
                    <div class="dest-title">Откуда</div>
                    <div class="dest-text">{{ from }}</div>
                </div>
                <div class="dest-point">
                    <div class="dest-title">Куда</div>
                    <div class="dest-text">{{ to }}</div>
                </div>
            </div>
            <svg width="322" height="2" viewBox="0 0 322 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L321 1.00003" stroke="black" stroke-opacity="0.3" stroke-linecap="round" stroke-dasharray="4 4"/>
            </svg>
            <div class="price-passengers">
                <div class="price">
                    <div class="price-text">{{ price }}₽</div>
                    <div class="per-unit">/чел.</div>
                </div>
                <div class="passengers">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.501 12.8125C11.8649 12.8117 13.2072 12.9715 14.5293 13.293C15.8494 13.6139 17.154 14.0942 18.4434 14.7363C18.9105 14.9785 19.2843 15.326 19.5742 15.7979C19.859 16.2615 20.0007 16.7637 20 17.3242V20H1V17.3252C1 16.7632 1.14215 16.2615 1.42676 15.7988C1.68123 15.3852 1.99989 15.0663 2.38965 14.8301L2.56055 14.7344C3.84842 14.0916 5.15148 13.6128 6.46973 13.2939C7.7927 12.974 9.1361 12.8133 10.501 12.8125ZM10.5 1C11.6764 1 12.6589 1.40694 13.501 2.24902C14.3431 3.09111 14.75 4.07357 14.75 5.25C14.75 6.42642 14.3431 7.40889 13.501 8.25098C12.6589 9.09306 11.6764 9.5 10.5 9.5C9.32358 9.5 8.34111 9.09306 7.49902 8.25098C6.65694 7.40889 6.25 6.42642 6.25 5.25C6.25 4.07357 6.65694 3.09111 7.49902 2.24902C8.34111 1.40694 9.32358 1 10.5 1Z" stroke="#263036" stroke-width="2"/>
                    </svg>
                    <div class="passengers-count">{{ curPassengers }}/{{ maxPassengers }}</div>
                </div>
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
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    text-decoration: none;
}

.add-info {
    width: 290px;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.info {
    width: fit-content;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.info-text {
    font-size: 20px;
    font-weight: bold;
    color: #4FC0FF;
    width: fit-content;
    margin-left: 5px;
}

.main-body {
    width: 320px;
    height: fit-content;
    min-height: 90px;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
}

.route-info {
    margin: 7px 0;
    width: 290px;
    height: fit-content;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.dest-point {
    width: 140px;
    height: fit-content;
    min-height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.dest-title {
    color: #737373;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 3px;
}

.dest-text {
    color: #263036;
    font-size: 14px;
    font-weight: 600;
    width: fit-content;
}

.price-passengers {
    width: 290px;
    height: 21px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    color: #263036;
    font-size: 21px;
    font-weight: bold;
    height: 25px;
}

.per-unit {
    color: #737373;
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
    color: #263036;
    letter-spacing: 6%;
    height: fit-content;
}

.comment {
    height: fit-content;
    max-width: 320px;
    color: #4FC0FF;
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    margin-top: 0;
}
</style>
