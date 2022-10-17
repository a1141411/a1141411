import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    div{
        width: 17.1rem;
        height: 1.56rem;
        max-height: 100%;
        background: #f7f7f7;
        display: flex;
        align-items: center;
        margin-left: 0.87rem;
        color: #a6a6a6;
        font-size: .56rem;
        input {
            text-decoration:none;
            width: 100%;
            height: 100%;
            border: 0;
            margin-left: 1%;
            padding-left: 5px;
            background-color: #f7f7f7;
            padding-left: 5px;
            padding-right: 5px;
            border-radius: 0.87rem;
        }
    }
`