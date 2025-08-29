function initState() {
    return {
        totalQunatity: localStorage.getItem("totalQuantity") || 0,
        productsInCart : JSON.parse(localStorage.getItem("productsInCart")) || [],
    }
}

export const cart = {
    state : initState,
    mutations: {
        addCart(state, product) {
            // 장바구니 수량
            const existProduct = state.productsInCart.find(p => p.productId === product.productId);
            if(existProduct) {
                existProduct.productCount += product.productCount;
            } else {
                state.productsInCart.push(product);
            }

            state.totalQunatity = parseInt(state.totalQunatity) + product.productCount;
            localStorage.setItem("totalQuantity", state.totalQunatity);
            
            // 장바구니 안에 상품목록
            state.productsInCart.push(product);
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
        },
        clearCart(state) {
            state.productsInCart = [];
            state.totalQunatity = 0;
            localStorage.removeItem("productsInCart");
            localStorage.removeItem("totalQuantity");
        }
    },
    actions: {
        addCart(context, product) {
            context.commit("addCart", product);
        },
        clearCart(context) {
            context.commit("clearCart");
        }
    },
    getters: {
        getTotalQuantity : state => state.totalQunatity,
        getProductsInCart : state => state.productsInCart
    }
}