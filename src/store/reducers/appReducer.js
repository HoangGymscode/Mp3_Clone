
import actionType from "../actions/actionTypes";
// import thunk from "react-redux" ;

const initState = {
    homeData: [], 
    test: 'Hallo tui la Hoang'
}

const appReducer = (state=initState, action)=> {
    switch (action.type) {
        case actionType.GET_HOME:
            
       return state;
    
        default:
            return state;
    }

}
export default appReducer