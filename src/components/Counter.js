import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counterSlice";

const Counter = () => {


  const counter = useSelector((state) => state.counter); //counter라는 리듀서를 뱉는거임
  // const showCounter = useSelector((state) => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () =>{
    dispatch(counterAction.increase(10)) // 자동으로 acetion 객체를 생성하게 된다. 
    //{type : SOME_QNIQUE_IDENTIFIER, payload : 10} type이름을 자동으로 생성해준다. 내부적으로 위의 10 이라는 변수는 payload에 들어가게 된다. 
  }

  const toggleCounterHandler=()=>{
    console.log(counter.showCounter)
    dispatch(counterAction.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {counter.showCounter && <div className={classes.value}>{counter.counter}</div>}
      <div>
        <button onClick={incrementHandler}>increase</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
