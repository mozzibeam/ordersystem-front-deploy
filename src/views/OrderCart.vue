<template>
    <v-container>
        <v-row justify="center">
            <v-col class="text-center text-h5">
                장바구니 목록
            </v-col>
        </v-row>
        <v-row justify="space-between">
            <v-col cols="auto">
                <v-btn color="secondary" @click="clearCart()">장바구니 비우기</v-btn>
            </v-col>
            <v-col cols="auto">
                <v-btn color="primary" @click="orderCreate()">주문하기</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-table>
                    <thead>
                        <tr>
                            <th>제품 ID</th>
                            <th>제품명</th>
                            <th>주문수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in getProductsInCart" :key="product.productId">
                            <td>{{ product.productId }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.productCount }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';

    export default {
        computed:{
            getProductsInCart() {
                return this.$store.getters.getProductsInCart;
            }
        },
        methods: {
            clearCart() {
                this.$store.dispatch("clearCart");
            },
            async orderCreate() {
                try {
                    const orderData = this.getProductsInCart.map(p => {return{productId:p.productId, productCount:p.productId}});
                    axios.post(`${process.env.VUE_APP_API_BASE_URL}/ordering/create`, orderData);
                    this.clearCart();
                    alert("주문 완료");
                } catch(e) {
                    console.log(e);
                }
            }
        }
    }
</script>