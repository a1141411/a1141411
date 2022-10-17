import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 3.75rem;
    position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    background: #f2f2f2;
    .header_search{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.35rem;
        margin-top: 0;
        color: rgba(0,0,0,.3);
        i{
            width: 2.6rem;
            height: 1.5rem;
            left: 0;
            right: 0;
            align-items: center;
            flex: 1.5;
        }
        .Homesearch {
            flex: 7;
            height: 1.6rem;
            font-size: 0.72rem;
            border: 1px solid #e5e5e5
        }
    }
    .list {
        width: 100%;
        height: 1.5rem;
        position: fixed;
        display: flex;
    a {
        flex: 1;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        /* text-decoration:none; */
        color: #999;
        &.active {
            color: #ff6700;
        }
        span{
            height: 0.7rem;
            font-size: 0.57rem;
        }
    }
    }
`
export const Tab = styled.div`
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a {
    flex: 1;
    padding: 0.1rem 0;
    font-size: 0.7rem;
    color: #e4e4e4;
    &.active {
      span {
        padding: 0.15rem 0;
        font-weight: 700;
        color: #747474;
        border-bottom: 0.1rem solid #f1f1f1;
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #747474;
`;