import React from 'react'
import styled from 'styled-components'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import FormComplete from './FormComplete'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    align-items: center;
    height: 60%;
    gap: 2rem;

    @media (max-width: 1300px) {
        width: 60%;
    }
    @media (max-width: 1000px) {
        width: 75%;
    }
    @media (max-width: 768px) {
        width: 85%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
    @media (max-width: 320px) {
        width: 95%;
    }
`


function Form({ handleProgress, pageNo }) {
    
    return (
        <Container>

            {
                pageNo==1?<Form1 handleProgress={handleProgress}/>
                :pageNo==2?<Form2 handleProgress={handleProgress}/>
                :pageNo==3?<Form3 handleProgress={handleProgress}/>
                :pageNo==4?<FormComplete />
                :""
            }
        </Container>
    )
}

export default Form