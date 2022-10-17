import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer(props) {
    const { pathname } = useLocation()
    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
                <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/classify" className={classnames({active:pathname == '/classify'})}>
                <i className="fa fa-list"></i>
                <span>分类</span>
            </Link>
            <Link to="/miclub" className={classnames({active:pathname == '/miclub'})}>
                <i className="fa fa-globe"></i>
                <span>米圈</span>
            </Link>
            <Link to="/cart"  className={classnames({active:pathname == '/cart'})}>
                <i className="fa fa-shopping-cart"></i>
                <span>购物车</span>
            </Link>
            <Link to="/mine"  className={classnames({active:pathname == '/mine'})}>
                <i className="fa fa-user-o"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
