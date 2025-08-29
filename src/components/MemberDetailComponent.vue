<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        {{ pageTitle }}
                    </v-card-title>
                    <v-card-text>
                        <v-table>
    
                            <tbody>
                                <tr><td>id</td><td></td>{{ member.id }}</tr>
                                <tr><td>name</td><td>{{ member.name }}</td></tr>
                                <tr><td>email</td><td>{{ member.email }}</td></tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from 'axios';

export default{
    /// 화면간에 매개변수를 넘길때 사용하는 벼수값을 props라 칭함
    props: ['isMyPage', 'pageTitle'],
    data() {
        return {
            member: {}
        }
    },
    async created() {
        try {
            if(this.isMyPage) {
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/myinfo`);
                this.member = response.data.result;
            } else {
                const memberId = this.$route.params.id;
                console.log(memberId);
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/detail/${memberId}`);
                this.member = response.data.result;
            }
        } catch(e) {
            console.log(e);
            alert(e);
        }
    
    } 
}
</script>