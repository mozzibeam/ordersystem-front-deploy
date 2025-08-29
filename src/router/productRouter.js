import ProductListComponent from "@/components/ProductListComponent.vue";
import ProductCreate from "@/views/ProductCreate.vue";

export const productRouter = [
        {
            path: '/product/list',
            name: 'ProductList',
            component: ProductListComponent,
            props: {pageTitle: "상품목록", isAdmin: false}
        },
        {
            path: "/product/manage",
            name: "ProductListManage",
            component: ProductListComponent,
            props: {pageTitle: "상품관리", isAdmin: true}
        },
        {
            path: "/product/create",
            name: "ProductCreate",
            component: ProductCreate,
        },
]