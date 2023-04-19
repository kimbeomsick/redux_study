import { legacy_createStore as createStore } from "redux";



const initialState = { counter: 0, showCounter: true };

//여기서 전부 정의되나?
const counterReducer = (state = initialState, action) => {
  console.log(action.action);
  switch (action.type) {
    case "increment":
      //기존의 값의 재정의하는것이 아닌 새로운 객체를 반환해야한다. 
      // 즉 참조값을 사용하면 안된다. 
      // 디버깅도 힘들고, 버그로 인해 원하지 않은 동작을 야기할 수 도 있다. 
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;


// 문제 
// 엑션 값을 틀릴 수 있다. increase or increments 
// 데이터가 많을 수록 많은 상태를 복사해야하는데, 줄이 엄청 길어진다. 
// ...state를 사용한다. 
