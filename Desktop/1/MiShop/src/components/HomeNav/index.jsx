import React from 'react'
import { Wrapper } from './style'
import { NavLink } from 'react-router-dom'

export default function HomeNav() {
  let homeNavs = [
    { id: 1, desc: '推荐', path: '/recommend'},
    { id: 2, desc: '智能', path: '/intelligent'},
    { id: 3, desc: '家电', path: '/appliances'},
    { id: 4, desc: '手机', path: '/phone'},
    { id: 5, desc: '笔记本', path: '/notebook'},
  ]

  return (
    <Wrapper>
      <div className="navbar swiper-container">
        <div className="nav-box swiper-wrapper">
          {
            homeNavs.map((item, index) => {
              return (
                <NavLink
                  index={index}
                  to={`/home${item.path}`}
                  key={item.id}
                  className="nav-item swiper-slide"
                >
                {item.desc}
                </NavLink>
              )
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}