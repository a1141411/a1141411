import { useState } from 'react'
import './App.css'


function App() {

  return (
    <div className="App">
        <h2>热门赛事</h2>
        <div>
          <ul className="Contest">
            <li className='ContestTab'>全部</li>
            <li className='ContestTab'>电竞赛事</li>
            <li className='ContestTab'>体育赛事</li>
          </ul>
        </div>
    </div>
  )
}

export default App