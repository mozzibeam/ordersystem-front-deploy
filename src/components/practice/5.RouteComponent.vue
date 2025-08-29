<template>
    <v-btn href="/practice/route2">일반 라우팅</v-btn>
    <v-btn @click="hrefRouting()">일반 라우팅(함수)</v-btn>
    <v-btn :to="'/practice/route2'">SPA 경로기반 라우팅</v-btn>
    <v-btn @click="spaRouting1()">SPA 경로기반 라우팅(함수)</v-btn>
    <v-btn :to="{name: 'RouteComponent2'}">SPA 이름기반 라우팅</v-btn>
    <v-btn @click="spaRouting2()">SPA 이름기반 라우팅(함수)</v-btn>
    <v-btn :to="'/practice/route3/1'">게시글 1번 보기</v-btn>
    <v-btn @click="goToPost(1)">게시글 1번 보기</v-btn>
</template>
<script>
    export default{
        methods:{
            hrefRouting(){
                // 화면 전체 새로고침이 발생하여 ux 하락할 수 있음
                // 화면 상의 모든 컴포넌트가 새롭게 creader"
                window.location.href = "/practice/route2";
            },
            spaRouting1(){
                // SPA: Single Page Application, 새 `로고침 없이 페이지 로드
                // 새롭게 라우트 되는 컴포넌트만 create 적용 가능, 기존 컴포넌트는 create되지 않음
                this.$router.push("/practice/route2");
            },
            spaRouting2(){
                this.$router.push({name: "RouteComponent2"});
            },
            goToPost(postId){
                this.$router.push(`/practice/route3/${postId}`);
            }
        }
    }
</script>