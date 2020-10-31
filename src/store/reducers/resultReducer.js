import * as actionType from '../actions/actionTypes'

const initialState = {
    results: [],
    resultId: 0
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
    case actionType.STORE_RESULT:
        console.log('storing result: ',action.result)
        return {
            ...state,
            resultId: state.resultId + 1,
            results: state.results.concat({id: state.resultId, value: action.result})
        };
    case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        return {
            ...state,
            results: updatedArray
        };
    default: 
        return {
            ...state
        };
    }
}
export default reducer;