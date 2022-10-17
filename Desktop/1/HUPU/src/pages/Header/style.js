import styled from 'styled-components'
export const Wrapper = styled.div`
    * {
        margin: 0;
        padding: 0;
    }
    .hupu-m-nav-tabs-component-wrapper {
    width: 100vw;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background: var(--bg);
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid var(--line);
    background-color: white;
}
.hupu-m-nav-tabs-component-wrapper .tabs-component-search {
    position: relative;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 16px;
}
.hupu-m-nav-tabs-component-wrapper .tabs-component-search-logo {
    width: 36px;
    height: 31px;
    background: url(https://activity-static.hoopchina.com.cn/images/22613-sn91f8rc-upload-1655090836640-2.png) 0 0 no-repeat;
    background-size: contain;
    font-size: 0;
}
.hupu-m-nav-tabs-component-wrapper .tabs-component-search-input {
    flex: 1 1;
    margin: 0 16px;
    background: var(--bg_click);
    border-radius: 2px;
    height: 28px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: var(--tertiary_text);
    line-height: 18px;
    input {
      height: 25px;
      width: 250px;
    }
}
.hupu-m-nav-tabs-component-wrapper .tabs-component-search-input-icon {
    width: 14px;
    height: 14px;
    margin: 0 8px;
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