import React,{ useEffect } from 'react'
import { Wrapper } from './style'
import Swiper from 'swiper'
import Home from '../../pages/Home'

export default function index() {
    useEffect(() => {
      new Swiper('.home_info_banners', {
          loop: true,
          autoplay: {
              delay: 3000
          }
      })
  }, [])
  return (
    <Wrapper>
        <Home />
    </Wrapper>
  )
}