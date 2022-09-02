import React from 'react'
import styled from 'styled-components'
import FormHeader from './FormHeader'
import Button from '../Button'
import { useSelector } from 'react-redux'


const Completion = styled.div`
    width: 40px;
    height: 40px;
    font-size: 13px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgba(101,77,228,255);
    color: #fff;
    span{
      font-size: 25px;
    }
`


function FormComplete({ handleProgress }) {

    const userName = useSelector(state => state.onboarding.name)

    return (
        <>
            <Completion>
              <span>&#x2713;</span>
            </Completion>
            <FormHeader 
                title={`Congratulations, ${userName?userName:"Anonymous"}!`}
                text="You have completed onboarding, you can start using the Eden!"
            />

            <Button handleProgress={handleProgress} text="Launch Eden"/>
            
        </>
    )
}

export default FormComplete