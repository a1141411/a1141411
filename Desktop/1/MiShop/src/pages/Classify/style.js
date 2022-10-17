import styled from 'styled-components'
export const Wrapper = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${props => props.play > 0 ? "60px": 0};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #f2f3f4;
  transform-origin: right bottom;
  margin-bottom: 2.5rem;
.sale-box{
    padding: 0;
margin-top: 50px;
 height: 745.2px;
 overflow: hidden;
 background-color: #fff;
 background: #fff!important;
 .sale-main{
 display: -webkit-flex;
 display: flex;
 height: 100%;
 width: 82.41px;
 .sale-left{
 height: 100%;
 background-color: #f8f8f8;
 -webkit-overflow-scrolling: touch;
 ul{
    margin: 0;
    padding: 0;
 flex: none;
 position: relative;
 z-index: 0;
 list-style: none;
 a{
    line-height: 0.9rem;
    overflow: hidden;
    text-align: center;
    width: 82.41px;
    margin-left: 0;
    height: 48.8px;
 display: block;
 position: relative;
 font-size: .6rem;
 color: #333;
 background-color: #fff;
 span{
 font-size: .6rem;
 color: #000;
 }
 }
 }
 }
 }
}
.sale-detail-box {
    position: relative;
    height: 36.94185rem;
    width: 14.6319rem;
    // width: 31.8vw;
    .top-title {
      color: white;
    }
    .sale-detail {
      width: 13.3844rem;
      height: 100%;
      padding: 0 0.624rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
  
    }
  }
  .menu-box {
    height: 100%;
    width: 14.6319rem;
    padding-bottom: 0.424rem;
    padding-bottom: 4vw;
    overflow-y: auto;
    .menu-detail {
      width: 13.3844rem;
      height: 3.95185rem;
      margin: 0;
      padding: 0;
      display: block;
      margin-block-start: 0.25em;
      margin-block-end: 0.25em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      margin-bottom: 0.416rem;
      background: #f8f8f8;
      border-radius: 0.65rem;
    }   
    .top-title {
      margin-top: 0.75rem;
      display: block;
      padding-left: 0.416rem;
      font-size: 0.78rem;
      text-align: left;
      text-overflow: ellipsis;
      color: #000;
    }
  }
    .title-img-box{
      width: 13.3844rem;
      min-height: 4rem;
      .title-img-box_img {
        width: 100%;
        height: 100%;
      }
    }

      
  .menu-top {
    position: relative;
    margin-left: 0.1rem;
    margin-left: 1vw;
    padding: 0.08rem 0.32rem 0.08rem 0;
    padding: 0.8vw 0.32vw 0.8vw 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    .top-title {
      margin-right: 0.05rem;
      margin-right: 0.5vw;
      font-weight: 700;
      font-size: 0.828rem;
      color: #666;
      -webkit-flex: none;
      flex: none;
    }
    span {
      display: block;
      -webkit-flex: 1;
      flex: 1;
      color: #999;
      font-size: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .menu-item {
    height: auto !important;
    display: flex;
    section {
      -webkit-flex: 1;
      flex: 1;
      position: relative;
      align-items: center;
      height: 3.95185rem;
      background: #f8f8f8;
      border-radius: 0.65rem;
      .fooddetail-info {
        margin: 0.5rem 0;
        position: relative;
        padding-right: 0.4rem;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: start;
        align-items: start;
        span {
          width: 100%;
          height: 0.624rem;
          font-weight: 400;
          /* overflow: hidden; */
          font-size: 0.7rem;
          white-space: nowrap;
          width: 1.6rem;
          width: 16vw;
          text-overflow: ellipsis;
          text-align: left;
          color: black;
        }
      }
      .sale_price {
        margin: 0.5rem 0;
        font-size: 0.75rem;
        line-height: 0.624rem;
        color: #333;
        padding-bottom: 0.093333rem;
        display: flex;
        align-items: baseline;
        bottom: 0;
        span {
        }
      }
    }
  }
  .img-bubble{
    position: relative;
    width: 2.99185rem;
    height: 2.99185rem;
    margin: 0.52rem;
    .img-box {
    width: 2.99185rem;
    height: 2.99185rem !important;
    -webkit-flex: none;
    flex: none;
    margin-right: 0.266667rem;
    margin-right: 2.666667vw;
    position: relative;
  }
  .sale-img {
    width: 100%;
    border-radius: 0.053333rem;
    border-radius: 0.533333vw;
  }
  }
  
  //footer
  .footer-box {
    z-index: 11;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61, 61, 63, 0.9);
    height: 1.28rem;
    height: 12.8vw;
    a {
      text-decoration: none;
      height: 100%;
      width: 2.8rem;
      width: 28vw;
      color: #fff;
      text-align: center;
      text-decoration: none;
      font-size: 0.2rem;
      font-weight: 700;
      -webkit-user-select: none;
      user-select: none;
      line-height: 1.28rem;
      line-height: 12.8vw;
    }
  }
  
`
