import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 2.34rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        flex: 1;
        height: 2.34rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-decoration:none;
        color: #999;
        &.active {
            color: #ff6700;
        }
        img{
            display: block;
            width: 1.04rem;
            height: 1.04rem;
            margin: 0 auto 0.1rem;
            max-width: 30px;
            max-height: 30px;
        }
        span{
            height: 0.7rem;
            font-size: 0.57rem;
        }
    }
` 