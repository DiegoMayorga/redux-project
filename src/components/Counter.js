import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index.js";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
    // aqui el payload se crea solo, ya no tengo la libertad de ponerle el nombre que quiera.
    // por tanto, en el store, en el metodo increase de reducers debo cambiar action.amount
    // por action.payload porque ese es el nombre de la propiedad en caso de agregar un dato
    // extra que pueda enviar.
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* class Counter extends Component {
  incrementHandler() { 
    this.props.increment(); 
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
