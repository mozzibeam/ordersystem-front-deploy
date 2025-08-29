<template>
    <v-app-bar>
        <v-container>
            <v-row>
                <!-- justify-start: 왼쪽기준 정렬 -->
                <v-col class="d-flex justify-start">
                    <div v-if="userRole === 'ADMIN'">
                        <v-btn :to="`/member/list`">회원 관리</v-btn>
                        <v-btn :to="`/product/manage`">상품 관리</v-btn>
                        <v-btn :href="`/order/list`">실시간 주문 건수 {{ liveOrderCount }}</v-btn>
                        <v-btn :to="`/practice/store`">스토어 건수</v-btn>
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn to="/">DevOps shop authomation</v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn :to="`/product/list`">상품목록</v-btn>
                    <v-btn v-if="isLogined" :to="'/order/cart'">장바구니 {{ getTotalQuantity }} </v-btn>
                    <v-btn v-if="isLogined" :to="'/member/mypage'">마이페이지</v-btn>
                    <v-btn v-if="!isLogined" :to="'/member/create'">회원가입</v-btn>
                    <v-btn v-if="!isLogined" :to="'/member/dologin'">로그인</v-btn>
                    <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import { EventSourcePolyfill } from 'event-source-polyfill';
import { jwtDecode } from 'jwt-decode';

export default {
    data() {
        return {
            userRole: null,
            isLogined: false,
            liveOrderCount: 0,
        }
    },
    computed:{
        getTotalQuantity(){
            return this.$store.getters.getTotalQuantity;
        }
    },
    created() {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            const payload = jwtDecode(accessToken);
            console.log(payload);
            this.userRole = payload.roleCode;
            this.isLogined = true;
        }
        // sse 연결 및 메시지 수신
        if(this.userRole === 'ADMIN') {
            // sse연결 요청을 위한 event-source-polyfill라이브러리 사용
            let sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URL}/sse/connect`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
                });
            
                sse.addEventListener('connect', (event) => {
                    console.log(event);
                });

                sse.addEventListener('ordered', (event) => {
                    console.log(event);
                    this.liveOrderCount++;
                });
        }
    },
    methods: {
        doLogout() {
            localStorage.clear();
            this.isLogined = false;
            this.userRole = null;
            this.$router.push("/");
        }
    }
}
</script>