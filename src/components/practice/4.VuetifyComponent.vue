<template>
    <v-container>
        <!-- 전체 길이 총 12 -->
        <v-row>
            <!-- 8과 4로 길이를 나눔 -->
            <v-col cols="8">
                helloworld1
            </v-col>
            <!-- 4와 8로 길이를 나눔 -->
            <v-col cols="4">
                helloworld2
            </v-col>
        </v-row>
        <v-row>
            <v-card>
                <v-card-title>
                    회원가입
                </v-card-title>
                <v-card-text>
                    회원가입을 해주세요.
                </v-card-text>
            </v-card>
        </v-row>
        <v-row>
            <table>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>test</td>
                            <td>test@naver.com</td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>test@naver.com</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </table>
        </v-row>
    </v-container>
    <v-container>
        <v-card>
            <v-card-title id="signup-title" style="font-size: 50px;">회원가입</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="name" type="text" />
                    <v-text-field label="email" type="email" />
                    <v-text-field label="password" type="password" />
                    <v-btn color="primary" place-content>제출하기</v-btn>
                    <!-- 모달창(팝업) 위한 v-dialog -->
                    <v-btn @click="cancel()">취소버튼</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        
        <!-- v-dialog는 내부적으로 true/false 값을 가지고 외부 공개여부가 결정 -->
        <v-dialog v-model="trueOrFalse" max-width="400px">
            <v-card>
                <v-card-title>
                    정말 취소하시겠습니까?
                    <v-card-actions>
                        <v-btn color="primary" @click="checkYes()">예</v-btn>
                        <v-btn color="secondary" @click="checkNo()">아니오</v-btn>
                    </v-card-actions>
                </v-card-title>
            </v-card>
        </v-dialog>
    </v-container>

</template>

<script>
export default {
    data() {
        return {
            trueOrFalse: false
        }
    },
    methods: {
        cancel() {
            this.trueOrFalse = true;
        },
        checkYes() {
            this.trueOrFalse = false;
        },
        checkNo() {
            this.trueOrFalse = false;
        }
    }
}
</script>

<style>
#signup-title{
    color: blue;
}
</style>