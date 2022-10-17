import * as actionTypes from './constants'

const defaultState = {
    categoryList: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_CATEGORY:
            return {
                ...state,
                categoryList: action.data
            }
        default:
            return state
    }
}