import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { BackTop } from 'antd';

function Home(props) {
    const { categoryList } = props
    const { getCategoryListDispatch } = props
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };
    console.log(props);
    useEffect(() => {
        getCategoryListDispatch();
      }, [])
    const renderCategory = () => {
        return categoryList.map(item => {
            return (
                <main className='news_home-news__iRNCq'>
                <div>
                    <a className="news-item" >
                        <div className="news-item-info">
                            <div className="news-item-info-title" key={item.tid}>
                                {item.title}
                            </div>
                            <div className="news-item-info-basic">
                                <span>
                                    <span className='mdigital'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAmlJREFUaEPtmk1rE1EUht93ElPqQsSViKI/oKD/wIjgTwhqUTs7JTSJNo4uFFs30mTRTCUUN04qWWXhVsSFceNa3bqxiFBw14WWfsyRLAr5LCRzZ5wmJ9twzznPPec+DDOXmLAfJ4wXCjzuHdcOT1SHS1XvEvZQGSvoJApO1v5ywNQx0uWXXtrfx8dxArYSuPJw3m4qcGsHtMNjMNvDjzTx1bJQOArsvo8KBBfbax0amMQnJ2+njwJwyfWaIriswMNYWjsc49nWkQag0mqf0H4PHnqG9QzHZwdUWiotdL7EU2kBUEvHx1E9lai0VFoqrd63liotlVZ8dkAtrZZWS6ul9Vk6Pk7urUQtrZZWS6ulW5beEKBmQlaWhWb79YPumI1GI7Wx+eeuL3JqlHwE5kRwPtDXw1ESD1xDLD3K24v9/i+7b2Z87Ne7v+8GzT/0p5agCTvW9wEWEZbd9QIoL0QwZTTfKJY2WkAX8Opq/ey27NVE5KrRPG3BYtPhsutdF+GaQE6GBduKeyjwypp3YWcHcyYKIJDuvn4AYil1ApXdLVRFcHPwWee2BXntA7+D1pJKoXb/nv3jIE5ody2XXW8RgmedBfMdITMCnBsA4hOsJ45NPVnI3vgZFLbf+oiBD0EgPjAJp/2a4FgCk/xmWZZTnL/9PgzA7pj/rcMEf5F4WszdWSfpRwHbyhE5MMktCJeTZ6ZXHmQyf6MCjVxaJHaFfDWN489zuUxg+466UVF1+C2ZeuzkZ7+PWqipdaECU3gtwURxIX/rs6mCg8YJDbhU9U47WXszaIGm14cGbLpQU/EU2NROxjXOP1nahFv44X9hAAAAAElFTkSuQmCC" alt="" />
                                        999
                                    </span>
                                    <span className='mdigital'>
                                        <img src="data:image/png;base64,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" alt="" />
                                        999
                                    </span>
                                </span>
                                <span>
                                    <span className='news-topic-m'>
                                        {item.topicName}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="news-img" key={item.tid}>
                            <img src={item.img} alt="" className='hupu-fufu-lazy-img replace-img' />
                        </div>
                    </a>
                </div>
                </main>
            )
        })
    }
    return (
        <Wrapper>
            <div className='main'>
                {renderCategory()}
                <BackTop>
                    <div style={style}>回到顶部</div>
                </BackTop>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.classify.categoryList,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      getCategoryListDispatch() {
        dispatch(actionCreators.getCategoryList())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)