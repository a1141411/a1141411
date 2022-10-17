import React, { useEffect } from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import Search from './Search'

function Classify(props) {
    const { categoryList } = props
    const { getCategoryListDispatch } = props
    console.log(props);
    useEffect(() => {
        getCategoryListDispatch();
      }, [])
      const renderCategory = () => {
        return categoryList.map(item => (
            <div className="left-data" key={item.id}>
                <a onClick={() => scrollToAnchor(item.id)}>
                    <span>{item.name}</span>
                </a>
            </div>
        ))
      }
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName)
            if (anchorElement) {
                anchorElement.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                })
            }
        }
    }
    const renderSaleSlide = (categoryList) => {
        return categoryList.map(item => {
            return (
                <div className="menu-box-detail" key={item.id}>
                    <div className="title-img-box">
                        <div className="top-title" id={item.id}>
                            {item.name}
                        </div>
                        <img className="title-img-box_img" src={item.img} />
                    </div>
                    <div className="menu-box">
                    {
                        item.phone && item.phone.map((element, index) => {
                            return (
                                <>
                                <div className="top-title" key={index}>
                                    <span>{element.class}</span>
                                </div>
                                <div className="menu-detail">
                                  <div className="menu-detail-box">
                                    <div className="menu-item">
                                      <div className="img-bubble">
                                        <div className="img-box">
                                          <img className="sale-img" src={element.img} alt="" />
                                        </div>
                                      </div>
                                      <section>
                                        <p className="fooddetail-info">
                                          <span>{element.name}</span>
                                        </p>
                                        <span className="sale_price">
                                          <span>{element.price}</span>
                                        </span>
                                      </section>
                                    </div>
                                  </div>
                                </div></>
                            )
                        })
                    }
                    </div>
                </div>
            )
        })
    }
    return (
        <Wrapper>
            <Search />
            <div className="sale-box">
                <div className="sale-main">
                    <div className="sale-left">
                        <ul>
                            {renderCategory()}
                        </ul>
                    </div>
                    <div className="sale-detail-box">
                        <div className="sale-detail">
                            {renderSaleSlide(categoryList)}
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Classify)