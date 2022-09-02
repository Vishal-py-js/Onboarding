import React from 'react'
import styled from 'styled-components'


const Header = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-size: 28px;
        letter-spacing: 1px;
    }

    small{
        color: rgba(106,119,143,255);
        font-size: 15px;
    }
`

function FormHeader({ title, text }) {
    return (
        <Header>
            <h1>{title}</h1>
            <small>{text}</small>
        </Header>
    )
}

export default FormHeader