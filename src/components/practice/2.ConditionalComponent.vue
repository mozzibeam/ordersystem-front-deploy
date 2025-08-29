<template>
    <h1>vue 조건식</h1>
    <div v-if="!isLogined">로그인해주세요.</div>
    <div v-if="isLogined">환영합니다.</div>
    <button v-if="!isLogined" @click="doLogin()">로그인 버튼</button>
    <button v-if="isLogined" @click="doLogout()">로그아웃 버튼</button>

    <h1>상품목록조회</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>상품명</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in productList" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>

            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isLogined: false,
            // productList: [{id:1, name:"사과", price:"3000"}, {id:2, name:"복숭아", price:"16000"}, {id:3, name:"수박", price:"30000"}]
            productList: []
        }
    },
    // 화면이 열림과 동시에 실행되는 hook 함수: created
    async created() {
        const response = await axios.get("http://localhost:8080/product/list");
        console.log(response);
        this.productList = response.data.result.content;
    },
    methods: {
        doLogin() {
            this.isLogined = true;
        },
        doLogout() {
            this.isLogined = false;
        }
    }
}
</script>