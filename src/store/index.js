import { createStore } from "vuex";
import { cart } from "./cart";
import { practice } from "./practice";

const store = createStore({
    modules:{
        practice, cart
    }
});

export default store;