import React from 'react'
import { SearchOutline, SetOutline } from 'antd-mobile-icons'
import { Button, SearchBar, Space } from 'antd-mobile'
import { Wrapper } from './style'

export default function Search() {

  return (
   <Wrapper>
    <SearchBar
          placeholder='请输入内容'
          showCancelButton
          style={{
            '--border-radius': '100px',
            '--background': '#ffffff',
            '--height': '32px',
            '--padding-left': '12px',
          }}
        />
   </Wrapper>
  )
}