import * as actionTypes from './constants'

const defaultState = {
    cellList: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_CELL:
            return {
                ...state,
                cellList: action.data
            }
        default:
            return state
    }
}