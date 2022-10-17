import axios from 'axios'

export const getCategoryRequest = () => 
    axios.get('https://www.fastmock.site/mock/576b4bbb319e22bfeea77454ada0e7b9/beers/category')

export const getCellRequest = () => 
    axios.get('https://www.fastmock.site/mock/576b4bbb319e22bfeea77454ada0e7b9/beers/cell')