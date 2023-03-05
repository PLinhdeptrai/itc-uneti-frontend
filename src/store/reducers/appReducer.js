import actionTypes from "../action/actionTypes";

const InitState = {
    homeData: [],
    test: 'Hello 123'
}
const appReducer = (state = InitState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state
    
        default:
            return state
    }
}

export default appReducer