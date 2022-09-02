import React, { useState } from 'react'
import styled from 'styled-components'
import FormHeader from './FormHeader'
import Button from '../Button'
import Input from '../Input'


const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: space-around;
    gap: 20px;

    
`

function Form2({ handleProgress }) {

    const [workspaceName, setworkspaceName] = useState("")
    const [url, setUrl] = useState("")
    const [url2, setUrl2] = useState("")

    const handleName = (e) => {
        setworkspaceName(e.target.value)
    }

    const handleUrl = (e) => {
        setUrl(e.target.value)
    }

    const handleUrl2 = (e) => {
        setUrl2(e.target.value)
    }

    return (
        <>
            <FormHeader 
                title="Let's set up a home for all your work"
                text="You can always create another workspace later."
            />

            <Information>
                <Input handleChange={handleName} label="Workspace Name" placeholder="Eden"/>
                <Input 
                    handleChange={[handleUrl, handleUrl2]}
                    label="Workspace URL" 
                    optional="(optional)" 
                    placeholder="www.eden.com/" 
                    placeholder2="Example"
                />
            </Information>

            <Button handleProgress={handleProgress} text="Create Workspace"/>
        </>
    )
}

export default Form2