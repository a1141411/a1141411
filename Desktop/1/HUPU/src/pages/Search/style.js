import styled from 'styled-components'
export const Wrapper = styled.div`
position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: ${props=>props.play>0?'60px':0};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
`