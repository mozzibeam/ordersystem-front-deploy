
<!-- 화면의 요소는 template안에 코딩 -->
<template>
  <!-- <HelloWorld></HelloWorld> -->
  <!-- <HelloWorld/> -->
  <!-- vue(vuetify)에서는 모든 태긔의 최상단에 v-app으로 감싸져 있어야 정상적으로 동작 -->
  <v-app>
    <HeaderComponent/>
    <!-- header, footer를 제외한 실질적인 화면의 내용 v-main안에 들어감 -->
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<!-- script에는 js를 코딩 -->
<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

// import HelloWorld from './components/HelloWorld.vue'


// vue는 export를 통하여 해당 요소를 다른 화면에서도 import할 수 있도록 설정
// 즉 아래 문법은 App.vue라는 화면을 다른 파일에서도 import할 수 있도록 컴포넌트(모듈)화 시킨 것
export default {
  name: 'App',
  // 다른 화면을 import한 이후에 template에서 사용하려 할 때는 components라는 별수에 나열
  components: {
    HeaderComponent, FooterComponent
  }
}
</script>

<!-- 디자인 요소는 style 태그 안에 코딩 -->
<style>
/* #app {
>>>>>>> upstream/main
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

} */
</style>
