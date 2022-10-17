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
`