import React from 'react'
import styled from 'styled-components'


const Container = styled.button`
    border:none;
    background: rgba(101,77,227,255);
    width: 100%;
    padding: 15px 0px;
    font-size: 15px;
    border-radius: 5px;
    color: #ffff;
    cursor: pointer; 
`

function Button({ text, handleProgress, type, handleNameR }) {

    // const handle = () => {
    //     handleProgress()
    //     handleNameR()
    // }
    return (
        <Container type={type} onClick={handleProgress}>
            {text}
        </Container>

    )
}

export default Button