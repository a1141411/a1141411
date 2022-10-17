import styled from 'styled-components'
export const Wrapper = styled.div`
.home_info_banners{
    margin-top: 3.8rem;
    position: relative;
    .swiper-pagination{
        position: absolute;
        text-align: center;
        .swiper-pagination-bullet{
            width: 0.4rem;
            border-radius: 50%;
            height: 0.4rem;
            border: 1px solid #fff;
            &.swiper-pagination-bullet-active{
                background-color: white;
            }
        }
    }
}
.btn_banners{
    width:100%;
    height:50vw;
    background:#fff;
    
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
}
.swiper-item{
    display:flex;
    width: 20%;
    height: 50%;
    justify-content: space-around;
    
} 
.swiper-item div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.swiper-item div img{
    height:100%;
    width:100%
}

.streamer{
    img{
        width: 18.9rem;
        height: 5.8rem;
    }
}
.multi_cell{
    display: flex;
    width: 18.75rem;
    height: 13.75rem;
    .big{
        width: 9.3rem;
        height: 13.75rem;
        img{
            width: 9.3rem;
            height: 13.75rem;
        }
    }
    .small{
        width: 9.4rem;
        height: 13.75rem;
        img{
            width: 9.4rem;
            height: 6.8rem;
        }
    }
}
.cell_fill{
    margin-bottom: 2.5rem;
   img{
        width: 19.5rem;
        height: 11.9rem;
   }
}

`