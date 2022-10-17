import React from 'react'
import { Wrapper } from './style'

export default function Search() {
  return (
    <Wrapper>
        <div className="header_search">
            <input type="text" placeholder='搜索商品名称'/>
        </div>
    </Wrapper>
  )
}
