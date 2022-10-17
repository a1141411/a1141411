import { getCellRequest } from "@/api/request";
import * as actionTypes from './constants'

export const changeCell = (data) => ({
    type: actionTypes.GET_CELL,
    data
})

export const geyCell = () => {
    return (dispatch) => {
        getCellRequest()
            .then(data => {
                let list = data
                dispatch(changeCell(list))
            })
    }
}