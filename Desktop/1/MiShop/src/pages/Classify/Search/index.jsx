import React from 'react'
import { Wrapper } from './style'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

export default function Search() {
  const { pathname } = useLocation()
  return (
    <Wrapper>
      <Link to="/search" className={classnames({active:pathname == '/search'})}>
        <div className="header_search">
            <input type="text" placeholder='搜索商品名称'/>
        </div>
      </Link>
    </Wrapper>
  )
}
