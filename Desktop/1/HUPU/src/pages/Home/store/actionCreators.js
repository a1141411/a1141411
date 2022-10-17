import { getCategoryRequest } from "@/api/request";
import * as actionTypes from './constants'

export const changeCategoryList = (data) => ({
    type: actionTypes.GET_CATEGORY,
    data
})

export const getCategoryList = () => {
    return (dispatch) => {
        getCategoryRequest()
            .then(data => {
                console.log(data);
                dispatch(changeCategoryList(data.data))
            })
    }
}

