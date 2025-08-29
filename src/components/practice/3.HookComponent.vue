<template>
    <h1>hook 실습</h1>
    <button @click="moveScreen()">다른 화면으로 이동</button>
    <h1>{{ count1 }}</h1>
    <button @click="incrementCount()">count1 증가</button>
    <!-- computed를 통해 계산된 함수의 결과값은 함수명 그대로 변수처럼 사용 가능 -->
    <h1>computed 된 값: {{ doubleCount }}</h1>
</template>

<script>
export default {
    data() {
        return {
            count1: 0,
        }
    },
    // 화면이 열리기(vue 인스턴스가 생성) 전에 실행되는 함수
    // ex) 목록 조회, 상세 조회
    // created(){
    //     alert("created test")
    // },
    // 컴포넌트가 화면상에서 제거될 때 실행되는 함수(페이지 이동 시)
    // ex. 채팅화면을 벗어나 다른화면으로 이동 시 실시간 연결 종료
    beforeUnmount() {
        alert("화면 종료")
    },
    // 종속된 데이터가 변경될 때 함수를 다시 실행하여 값을 계산해서 리턴하는 함수
    // ex. 장바구니 수량 보여줄 때
    computed: {
        doubleCount() {
            // this.count1이 변경되면 doubleCount값이 변하는 로직
            return this.count1 * 2;
        }
    },
    // 특정 변수값의 변경사항을 인지하여 함수를 실행하는 hook 함수
    // ex. 검색어 입력 시 자동 api 호출
    // watch: {
    //     // 인지하고자 하는 변수값과 일치하는 변수명 사용
    //     count1(){
    //         alert("watch함수 실행");
    //     }
    // },
    // 화면 전체의 변경사항을 인지하는 함수
    updated(){
        alert("update함수 호출")
    },
    methods: {
        moveScreen() {
            this.$router.push("/practice/vuetify");
        },
        incrementCount() {
            this.count1++;
        }
    }
}
</script>