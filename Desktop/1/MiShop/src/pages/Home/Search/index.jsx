import React from 'react'
import { Wrapper, Tab, TabItem } from './style'
import { Link, useLocation, NavLink } from 'react-router-dom'
import classnames from 'classnames'
import HomeNav from '../../../components/HomeNav'

export default function Search() {
    const { pathname } = useLocation()
  return (
    <Wrapper>
        <div className="header_search">
            <i className="fa fa-heart"></i>
            <input className='Homesearch' type="text" placeholder='搜索商品名称'/>
            <Link to="/mine"  className={classnames({active:pathname == '/mine'})}>
                <i className="fa fa-user-o"></i>
            </Link>
        </div>
        <Tab>
            <NavLink to="/recommend">
                <TabItem>
                    <span>推荐</span>
                </TabItem>
            </NavLink>
            <NavLink to="/intelligent">
                <TabItem>
                    <span>智能</span>
                </TabItem>
            </NavLink>
            <NavLink to="/appliances">
                <TabItem>
                    <span>家电</span>
                </TabItem>
            </NavLink>
            <NavLink to="/phone">
                <TabItem>
                    <span>手机</span>
                </TabItem>
            </NavLink>
            <NavLink to="/notebook">
                <TabItem>
                    <span>笔记本</span>
                </TabItem>
            </NavLink>
        </Tab>
    </Wrapper>
  )
}
