import React, { useState } from 'react'
import { ProgressBar, Step } from 'react-step-progress-bar'
import "react-step-progress-bar/styles.css";
import styled from 'styled-components'
import Form from '../../components/Shared/Form'

const icon1 = "/assets/icons/Icon1.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 85%;
    padding: 0px 30px;

    @media (max-width: 1300px) {
        width: 65%;
    }
    @media (max-width: 1000px) {
        width: 75%;
    }
    @media (max-width: 768px) {
        width: 80%;
        height: 75%;
    }
    @media (max-width: 600px) {
        width: 85%;
    }
    @media (max-width: 450px) {
        width: 90%;
        padding: 0px 0px;
    }
    @media (max-width: 320px) {
        width: 100%;
    }
`

const ProgressBarContainer = styled.div`
    width: 40%;

    .indexedStep {
        color: black;
        width: 40px;
        height: 40px;
        font-size: 13px;
        border: 1px solid rgba(207,211,219,255);
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .indexedStep.accomplished {
        border: none;
        background-color: rgba(101,77,228,255);
        color: #fff;
      }

    @media (max-width: 1300px) {
        width: 55%;
    }
    @media (max-width: 1000px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 65%;
    }
    @media (max-width: 600px) {
        width: 70%;
    }
    @media (max-width: 450px) {
        width: 75%;
    }
    @media (max-width: 320px) {
        width: 80%;
    }
 
`

const Header = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    img{
        height: 45px;
    }
`

function Onboarding() {
    
    const totalSteps = 3

    const [progress, setProgress] = useState(100/(totalSteps*2));
    const [pageNo, setPageNo] = useState(1)

    console.log(progress)

    const handleProgress = () => {
        setProgress(progress + 100/totalSteps)
        setPageNo(pageNo + 1)
    }

    return (
        <Container>
            <Content> 
                <Header>
                    <img src={icon1} alt=""/>
                    <h2>Eden</h2>
                </Header>
                <ProgressBarContainer>
                    <ProgressBar  percent={progress} unfilledBackground="rgba(240,243,248,255)" filledBackground="rgba(101,77,228,255)" height={2}>
                        <Step>
                        {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                {index + 1}
                            </div>
                        )}
                        </Step>
                        <Step>
                        {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                {index + 1}
                            </div>
                        )}
                        </Step>
                        <Step>
                        {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                {index + 1}
                            </div>
                        )}
                        </Step>
                        <Step>
                        {({ accomplished, index }) => (
                            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                                {index + 1}
                            </div>
                        )}
                        </Step>
                    </ProgressBar>
                </ProgressBarContainer>
                <Form handleProgress={handleProgress} pageNo={pageNo}/>
                
            </Content>
        </Container>
    )
}

export default Onboarding