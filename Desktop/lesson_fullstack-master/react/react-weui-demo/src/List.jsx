import { useState } from 'react'
import WeUI from 'react-weui'  // react 组件框架

const {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI

function List(props) {
    const {data} = props
    return (
        data.map(book => <Book key={book.id} info={book}/>)
    )
}

function Book(props) {
    // props 非自有， 传入
    const {info} = props
    console.log(info, '---||||-----------')
  return (
    <MediaBox type="appmsg">
        <MediaBoxHeader>
            <img src="https://s.cn.bing.net/th?id=OIP-C.TyA9O6jARINz_jLX5_qCYAHaKp&w=208&h=299&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="" />
        </MediaBoxHeader>
        <MediaBoxBody>
            <MediaBoxTitle>{info.title}</MediaBoxTitle>
            <MediaBoxDescription>{info.des}</MediaBoxDescription>
        </MediaBoxBody>
    </MediaBox>
    // <div>
    //     <div>
    //     {
    //         data.map((book) => <div key={book.id}>{book.title}</div>)
    //     }
    //     </div>
    // </div>
  )
}

export default List