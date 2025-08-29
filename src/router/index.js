import { createRouter, createWebHistory } from "vue-router";
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";
import { orderRouter } from "./orderRouter";
import { productRouter } from "./productRouter";

const routes = [
    ...productRouter,
    ...orderRouter,
    ...practiceRouter,
    ...memberRouter,
];
const router = createRouter(
    {
        //vue router는 크게 2종류
        // 1. createWebHistory: localhost:3000/member/create
        // 2. createWebHasHistory: /#/member/create
        history: createWebHistory(),
        routes
    }
)

// export된 router를 main.js에서 import 해줘야 함
export default router
