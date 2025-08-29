# 장바구니 로직 흐름 분석 (2025-08-13)

## 현재 코드 기준 로직 흐름 분석

이 문서는 현재 코드 베이스의 장바구니 기능 로직과 문제점을 분석합니다. 변경 사항이 생길 때마다 업데이트될 예정입니다.

### 1. 장바구니 담기 (정상 동작 및 잠재적 오류 구간)

1.  **사용자 행동**: 사용자가 '장바구니 담기' 버튼 클릭
2.  **컴포넌트**: `@click` 이벤트에 연결된 메서드가 `this.$store.dispatch('addCart', product)`를 호출.
3.  **Vuex Action (`src/store/cart.js`)**: `addCart` 액션이 실행되어 `addCart` 뮤테이션을 커밋.
4.  **Vuex Mutation (`src/store/cart.js`)**: `addCart` 뮤테이션이 실행되어 실제 상태를 변경.
    -   `state.productsInCart` 배열에 `product` 객체를 추가. (정상 동작)
    -   `state.totalQuantity`를 계산. (전달된 `product.productCount`가 유효하지 않으면 `NaN` 발생 가능성 있음)
5.  **LocalStorage**: 변경된 `productsInCart`와 `totalQuantity`를 `localStorage`에 저장하여 데이터 영속성 확보.

### 2. 장바구니 확인 (오류 발생 구간)

1.  **컴포넌트 (`OrderCart.vue`)**: 장바구니 목록 페이지가 렌더링될 때, `computed` 속성인 `getProductsInCart`가 실행됨.
2.  **`computed` 속성**: `this.$store.getters.getProductsInCart`를 통해 Vuex 저장소의 getter를 호출.

### 3. 문제 발생 지점 (`src/store/cart.js`)

-   **`getters`에 `getProductsInCart`가 정의되어 있지 않음.** 현재 `getTotalQuantity`만 존재.
-   따라서 `this.$store.getters.getProductsInCart`는 `undefined`를 반환.

### 4. 최종 결과 (화면)

-   `OrderCart.vue`의 `v-for` 디렉티브는 `undefined`를 반복하려고 시도.
-   결과적으로 장바구니 목록이 화면에 렌더링되지 않으며, 콘솔에 관련 에러가 발생할 수 있음.

### 결론

-   **담는 기능**: 절반의 성공 (데이터는 저장되나, 수량 계산에 `NaN` 버그 존재)
-   **보여주는 기능**: 실패 (`getter` 부재로 인해 데이터를 불러올 수 없음)
