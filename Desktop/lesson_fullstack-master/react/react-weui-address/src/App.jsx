import { useState, useEffect } from 'react'
import axios from 'axios'
import Address from './Address'

function App() {
  const [address, setAddress] = useState([])
  const [showDialog, setShowDialog] = useState(false)
  useEffect(function() {
    async function getUserAddress() {
      const { data } = await axios.get('https://www.fastmock.site/mock/576b4bbb319e22bfeea77454ada0e7b9/beers/address')
      // console.log(result);
      if (data && data.length > 0) {
        setAddress([...data])
      }
    }
    getUserAddress()
    // console.log('---------');
    // (async function() {

    // })()

  }, [])

  return (
    <div className="App">
      <Address address={address} />
    </div>
  )
}

export default App
