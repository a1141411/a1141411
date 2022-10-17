import { combineReducers } from 'redux'
import { reducer as classifyReducer } from '@/pages/Home/store/index'

export default combineReducers({
    classify: classifyReducer
})
