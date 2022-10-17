import React,{ useState, useEffect } from 'react'
import Search from './Search'
import { Wrapper } from './style'
import Swiper from 'swiper'
import { getCellRequest } from '@/api/request'
import { Link } from 'react-router-dom'

export default function Home() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
            let {data} = await getCellRequest()
            setCategory(data)
        })()
    })
    const renderCategory = () => {
        return category.map(item => 
            <Link 
                to="/eleme/all"
                className="swiper-item"
                key={item.id}
                >
                <div>
                    <p>
                        <img src={item.img} />
                    </p>
                </div>
            </Link>
        )
    }
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
        <Search />
        <div className="home_info_banners swiper-container">
            <div className="swiper-wrapper">
                    <div className = "swiper-slide">
                        <p>
                            <img width="100%" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7948d1f963986b5f9dd240d32d6a0839.jpg?thumb=1&w=720&h=360" alt=""/>
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <p>
                            <img width="100%" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ceb285f512491956f67f83a6d2e821c.jpg?thumb=1&w=720&h=360" alt=""/>
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <p>
                            <img width="100%" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d075c8f62b867bfdd9345f81107841e4.jpg?thumb=1&w=720&h=360" alt=""/>
                        </p>
                    </div>
            </div>
            <div className="swiper-pagination swiper-pagination-white swiper-pagination-bullets">
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
            </div>
        </div>
        <div className="btn-banners swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    {renderCategory()}
                </div>
            </div>
        </div>
        <div className='streamer'>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/323dd9df4b5ce38afa256287cca76708.png?f=webp" alt="" />
        </div>
        <div className='multi_cell'>
            <div className='big'>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16305100fd7913dd727e8906b97e8998.png?f=webp&w=537&h=762&bg=DDE2E6" alt="" />
            </div>
            <div className="small">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8a28a90c3c449ba422a10e40085d2e9.png?f=webp&w=537&h=378&bg=DBDEEF" alt="" />
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/200a6f45d1ccbf7d8fd92f4bbe2842d4.jpeg?f=webp&w=537&h=378&bg=F3E7E7" alt="" />
            </div>
        </div>
        <div className="cell_fill">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/051b383d45f1fad5aa3bfae8851af7c4.png?f=webp&w=1080&h=660&bg=FFFFFF" alt="" />
        </div>
    </Wrapper>
  )
}
