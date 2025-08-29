<template>
    <h1>store componentA</h1>
    <p>지역변수값 count : {{ count }}</p>
    <v-btn @click="incrementCount()">count 값 증가</v-btn>
    <p>전역store변수값 count : </p>
    <v-btn @click="incrementStoreCount()">전역 store count 값 증가</v-btn>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        incrementCount() {
            this.count++;
        },
        incrementStoreCount() {
            
        }
    }
}
</script>