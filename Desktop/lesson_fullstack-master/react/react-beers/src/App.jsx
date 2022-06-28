import { useState, useEffect } from 'react'
import Header from './Header'
import Loader from './Loader'
import Results from './Results'
import axios from 'axios'

function App() {
  // 数据驱动的页面
  const [beers, setBeers] = useState([]);
  // 自有状态 加载中效果
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 优先显示组件， 延后加载数据
    (async function() {
    // json-server 早期用
    // fast mock 提供的在线接口伪造工具
    // api 调用
      const data = await axios.get('https://www.fastmock.site/mock/b382251bce55be951b9acb71a1348802/beers/list')
      // const data = await response.json()
      console.log(data, '-------------')
      setBeers(data.data.beers)
      setLoading(false)
    })()

  },[])
  return (
    <div className="wrapper">
      {/* 组件化思维  状态思维*/}
      {/* 非自由的props 其实让组件更好的复用及协做 */}
      <Header siteName="Beer me!"/>
      {/* 出现， 不出现 状态组件 页面动态的一种状态 */}
      {loading && <Loader message="正在加载啤酒列表..."/>}
      <Results beers={beers} loading={loading}/>
    </div>
  )
}

export default App