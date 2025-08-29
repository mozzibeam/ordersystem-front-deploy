function initState() {
    return {
        count: 0
    }
}

export const practice = {
    // 상태초기화
    state : initState,
    // 상태 값을 변경하는 메서드
    mutations: {
        incrementCount(state) {
            state.count++;
        }
    },
    actions: {

    },
    getters: {

    }
    // 상태값을 가져가기 위한 메서드
}