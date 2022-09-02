import React, { useEffect } from 'react'
import styled from 'styled-components'
import FormHeader from './FormHeader'
import Button from '../Button'

const sigleIcon = "/assets/icons/icon2.png"
const groupIcon = "/assets/icons/icon3.png"


const Information = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;

    .selected{
      border: 1px solid rgba(101,77,227,255);
      transition-duration: 0.2s;
  }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 15px;
    text-align: left;
    width: 170px;
    height: 180px;
    border: 0.5px solid rgba(106,119,143, 0.2);
    border-radius: 6px;
    cursor: pointer;
    
    img{
      height: 35px;
      width: 35px;
    }
    h4{
      max-height: 15px;
    }
    p{
      color: rgba(106,119,143, 1);
      font-size: 13px;
    }
`

function Form3({ handleProgress }) {

    useEffect(() => {
        const x = document.getElementsByClassName("card-item")
        for(let i=0; i<x.length;i++) {
            x[i].addEventListener("click", function(){
                const selectedOne = document.querySelector(".selected")
                if(selectedOne){
                    selectedOne.classList.remove("selected")
                }
                this.classList.add("selected")
            }, false)
        }
    }, [])

    
    return (
        <>
            <FormHeader 
                title="How are you planning to use Eden?"
                text="We'll streamline your setup experience accordingly."
            />
            <Information>
                <Card className="card-item">
                  <img src={sigleIcon} alt=""/>
                  <h4>For myself</h4>
                  <p>Write better. Think more clearly. Stay organized</p>
                </Card>

                <Card className="card-item">  
                  <img src={groupIcon} alt=""/>
                  <h4>With my team</h4>
                  <p>Wikis, docs, tasks & projects, all in one place.</p>
                </Card>
            </Information>
            <Button type="small" handleProgress={handleProgress} text="Create Workspace"/>
            
        </>
    )
}

export default Form3