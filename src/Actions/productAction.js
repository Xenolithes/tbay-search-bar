import { UPDATE_UNIQUE_ID } from './types';



export function changeUniqueId (id) {
    return function (dispatch) {
        fetch('/add?id='+id)
            .then(res => {
            return res.json()})
            .then(product => {
                return dispatch({
                    type: UPDATE_UNIQUE_ID,
                    payload: product
                })
            })
    }
}
