import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer(props) {
    const { pathname } = useLocation()
    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
            <i class="iconfont">&#xe751;</i>
                <span>首页</span>
            </Link>
            <Link to="/classify" className={classnames({active:pathname == '/classify'})}>
                <i class="iconfont">&#xe640;</i>
                <span>专区</span>
            </Link>
            <Link to="/miclub" className={classnames({active:pathname == '/miclub'})}>
                <i class="iconfont">&#xe600;</i>
                <span>发布</span>
            </Link>
            <Link to="/cart"  className={classnames({active:pathname == '/cart'})}>
            <i class="iconfont">&#xe618;</i>
                <span>商城</span>
            </Link>
            <Link to="/mine"  className={classnames({active:pathname == '/mine'})}>
            <i class="iconfont">&#xe62f;</i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
