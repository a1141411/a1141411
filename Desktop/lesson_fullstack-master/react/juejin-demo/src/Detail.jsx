import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom'
// path 动态参数部分
const Detail = () => {
    let id = null;
    let searchObj = new URLSearchParams(useLocation().search)
    const navigate = useNavigate()
    const paramsObj = useParams();
    // console.log(paramsObj)
    if (paramsObj?.id) {
        id = paramsObj.id
    } else {
        if (searchObj.get('id')) {
            id = searchObj.get('id')
        }
    }
    console.log(id, '---------');
    useEffect(() => {
        if (!id) {
            navigate('/')
        }
    }, [])
    // console.log(id)
    // console.log(window.location.search)
    // let paramsObj = new URLSearchParams(useLocation().search)
    // console.log(paramsObj.get('id'))
    return(
        <>Detail {id} </>
    )
}

export default Detail;