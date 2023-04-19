
import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = { counter: 0, showCounter: true };


//전역 상태의 slice를 만들어 둔다. 
const counterSlice = createSlice({
  name : "counter",  //이름은 내가원하는거 하면됨 
  initialState, // 이전에 사용한 초기 값을 그대로 넣어준다. ex6문법으로 변수명과 값이 알아서 동일하게 들어간다. 즉 "initialState" : initialState
  reducers:{ //더이상 if 문을 작성하지 않아도 된다. 
    increment(state){
      state.count++; //상태를 변경하는것 같짐나 내부적으로 immer이라는 코드가 있는데 자동으로 원래 상태를 복사해서 새로운 상태를 도출하게 된다. 겉으로는 보이지 않지만 내부적으로 그렇게 돌아가고 있다. 
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){ //여기서 상태를 변경하는게 아니라 내부적으로 복사되고 새로운 객체를 뱉는것이다. 
      state.counter = state.counter +  action.amout
    },
    toggleCounter(state){
      state.showCounter =  !state.showCounter
    },

  }
});




// 버전1
// const store = createStore(counterSlice.reducer);

// 버전 2
// const store =configureStore({
//   reducer : counterSlice.reducer 
// })

// 버전 3
const store = configureStore({
  reducer : { counter: counterSlice.reducer, } //이러면 슬라이스를 여러개 넣을 수 있다. 
})

export default store;


// 문제 
// 엑션 값을 틀릴 수 있다. increase or increments 
// 데이터가 많을 수록 많은 상태를 복사해야하는데, 줄이 엄청 길어진다. 
// ...state를 사용한다. 
