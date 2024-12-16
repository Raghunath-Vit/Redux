const initialState={counter:0,showCounter:true};
const CounterReducer=(state=initialState,action)=>{

    if(action.type==="increment"){
        return {counter:state.counter+1,showCounter:true};
    }
    if(action.type==="decrement")
    {
        return {counter:state.counter-1,showCounter:true};
    }
    if(action.type==="increase")
        {
            return {
                counter:state.counter+action.value,
                showCounter:true,
            };
        }
    
    if(action.type==="toggling")
        {
            return{
                counter:state.counter,
                showCounter:!state.showCounter,
            }
        }
    return state;
}

export default CounterReducer;

