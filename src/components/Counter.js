import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector,useDispatch, connect } from 'react-redux';


const Counter = () => {
  let counter=useSelector(state=>state.counter);
  let showCounter=useSelector(state=>state.showCounter);
  const dispatch=useDispatch();

  const increment=()=>{
    dispatch({type:"increment"});
  }

  const decrement=()=>{
    dispatch({type:"decrement"});
  }

  const increase=()=>{
    dispatch({type:"increase",value:10})
  }

  const toggleCounterHandler = () => {
    dispatch({type:"toggling"})
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>Increment</button>
      <button onClick={increase}>Increase by 10</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
  // constructor(){} This is called when you have states and want to initialize their values


  // increment=()=>{
  //   this.props.increment();
  // }

  // decrement=()=>{
  //     this.props.decrement();
  // }

  // toggleCounterHandler=()=>{


  // }
//   // to render or return to output we use render method
//   render()
//   {
//     return(
//     <main className={classes.counter}>
//        <h1>Redux Counter</h1>
//        <div className={classes.value}>{this.props.counter}</div>
//        <button onClick={this.increment.bind(this)}>Increment</button>
//        <button onClick={this.decrement.bind(this)}>Decrement</button>
//        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//      </main>
//     )
//   }
// }



// It maps redux state to props which we use in this components and its returns an object where the keys will be available as props in the components and its values are then drilling into the redux states. It is similar to the useSelector Hooks
// const mapStateToProps=(state)=>{
//   return{
//     counter:state.counter
//   };
// };




// It is equivalent to useDispatch(). it also return the Objects where the keys are props used inside the component and its values are again functions which dispatch.
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     increment:()=>{dispatch({type:"increment"})},
//     decrement:()=>{dispatch({type:"decrement"})},
//   };
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
