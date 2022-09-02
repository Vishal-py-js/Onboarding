import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setName } from '../../../Redux/Onboarding/Actions'
import Button from '../Button'
import Input from '../Input'
import FormHeader from './FormHeader'


const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: space-around;
    gap: 20px;  
`

function Form1({ handleProgress }) {

    const[displayName, setDisplayname] = useState("")

    const dispatch = useDispatch()

    const handleName = (e) => {
        dispatch(setName(e.target.value))
    }

    const handleDisplayName = (e) => {
        setDisplayname(e.target.value)
    }

    return (
        <>
            <FormHeader 
                title="Welcome! First things first..."
                text="You can always change them later."
            />
            <Information>
                <Input handleChange={handleName} label="Full Name" placeholder="Steve Jobs"/>
                <Input handleChange={handleDisplayName} label="Display Name" placeholder="Steve"/>
            </Information>

            <Button handleProgress={handleProgress} text="Create Workspace"/>
        </>
    )
}

export default Form1
