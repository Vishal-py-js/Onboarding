import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    align-items: flex-start;
    label{
        color: rgba(79,89,110,255);
        color: black;
        font-size: 15px;
    }
    input{
        width: 100%;
        padding: 15px 15px;
        border: 0.2px solid #e9ecf4;
        border-radius: 5px;
        font-size: 15px;

        &:focus{
            outline: 1px solid rgba(101,77,227,255);
        }
    }
    .multi-input{
        display: flex;
        width: 100%;
        
        .input1{
            width: 40%;
            background: rgba(248,249,252,255);
        }
    }
`

function Input({ label, placeholder, placeholder2, optional, handleChange }) {
  return (
    <Container>
        <label>{label} {optional?<small>{optional}</small>:""}</label>
        {
            placeholder2?
                <div className='multi-input'>
                    <input onChange={(e)=>handleChange[0](e)} className='input1' placeholder={placeholder}/>
                    <input onChange={(e)=>handleChange[1](e)} className='input2' placeholder={placeholder2}/>
                </div>:
                <input onChange={e=>handleChange(e)} placeholder={placeholder}/>
        }
        
    </Container>
  )
}

export default Input