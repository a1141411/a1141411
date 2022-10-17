import React, { useEffect } from 'react'
import { Wrapper, Tab, TabItem } from './style'
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import Home from '../Home'
import Swiper from 'swiper'
import classnames from 'classnames'

export default function Header() {
  const { pathname } = useLocation()
  return (
    <Wrapper>
      <div id="__next">
        <div className="hupu-m-nav-tabs-component-wrapper undefined">
            <div className="tabs-component-search">
                <h1 className='tabs-component-search-logo'>
                    <div className="tabs-component-search-input">
                        <h1 className="tabs-component-search-logo">虎扑体育网</h1>
                        {/* <img src="https://activity-static.hoopchina.com.cn/images/22613-sn91f8rc-upload-1655090836640-2.png" alt="" /> */}
                        <div className="tabs-component-search-input">
                        <Link to="/home" className={classnames({active:pathname == '/home'})}>
                            <img src="https://activity-static.hoopchina.com.cn/images/22613-iugkjbrc-upload-1655090836640-6.png" className='tabs-component-search-input-icon' />
                            </Link>
                            <Link to="/search" className={classnames({active:pathname == '/search'})}>
                                <input type="text" placeholder='搜我想看'onClick={() => navigate("/search")} /> 
                            </Link>
                        </div>
                    </div>
                </h1>
            </div>
            <nav className='tabs-component'>
            <Tab>
            <NavLink to="/home">
                <TabItem>
                    <span>首页</span>
                </TabItem>
            </NavLink>
            <NavLink to="/intelligent">
                <TabItem>
                    <span>热榜</span>
                </TabItem>
            </NavLink>
            <NavLink to="/appliances">
                <TabItem>
                    <span>篮球</span>
                </TabItem>
            </NavLink>
            <NavLink to="/phone">
                <TabItem>
                    <span>足球</span>
                </TabItem>
            </NavLink>
            <NavLink to="/notebook">
                <TabItem>
                    <span>步行街</span>
                </TabItem>
            </NavLink>
            <NavLink to="/notebook">
                <TabItem>
                    <span>电竞</span>
                </TabItem>
            </NavLink>
            <NavLink to="/notebook">
                <TabItem>
                    <span>专区</span>
                </TabItem>
            </NavLink>
            <NavLink to="/notebook">
                <TabItem>
                    <span>游戏</span>
                </TabItem>
            </NavLink>
        </Tab>
            </nav>
        </div>
      </div>
    </Wrapper>
  )
}
