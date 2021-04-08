import React from "react";
import styled from "styled-components";
import {useState} from "react";


const SecondNavBar = (props) => {
  
  const [currentClick, setCurrentClick]=useState(null);
  const [prevClick, setPrevClick]=useState(null); 

  const GetClick = (e) => { 

        console.log(e.target.id); 
        setCurrentClick(e.target.id); //하는순간 값이 바뀌고      
    }

  React.useEffect((e) => {
  
  if(currentClick!==null)
  {
    console.log(currentClick);
   
    let current = document.getElementById(currentClick);
    
     current.style.color="#0078FF"; 
     current.style.border="0";
     current.style.boxShadow="inset 0 -0.1875rem #0078ff";
     current.style.borderRadius="0";
     current.style.padding="0.5rem 0";
     current.style.backgroundColor="transparent";
  }
  
    if(prevClick!==null)
    {
      let prev=document.getElementById(prevClick);
      
      prev.style.color="#263747";      
      prev.style.boxShadow="none";

    }

    setPrevClick(currentClick);
}, [currentClick]); 

  return (
   <ChallengesTab>
     <ChallengesTabUl>
       <ChallengesTabLi><a id="Button1" width= "145.479px" onClick={GetClick}>코딩테스트 고득점 Kit</a></ChallengesTabLi>
       <ChallengesTabLi><a className="nav-tabs" id="Button2" width= "103.562px" onClick={GetClick}>SQL 고득점 Kit</a></ChallengesTabLi>
       <ChallengesTabLi><a className="nav-tabs" id="Button3" width= "62.667px" onClick={GetClick}>모든 문제</a></ChallengesTabLi>
     </ChallengesTabUl>
   </ChallengesTab>
  );
};

const ChallengesTab= styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;

`;

const ChallengesTabUl=styled.ul`
  border-bottom: 0;
  box-shadow: inset 0 -0.0625rem #d7e2eb;
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  border:0;

  border-radius: 0;
  padding: 0.5rem 0;
  color: #263747;

  padding-top: 0px;
  padding-bottom: 0px;

`;

const ChallengesTabLi=styled.li`
  margin-bottom: 0; 
  font-size:16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  display: list-item;


  height: 25.333;

  text-align: -webkit-match-parent;

  background-color: transparent;
  border: 0;
  border-radius: 0;
  padding: 0.5rem 0;

  padding-top: 0px;
  padding-bottom: 0px;
  

  #Button1:hover{
    color:#0078FF;
    border: 0;      
  }

  #Button1:active{
    color: #0078FF;
    border: 0;
    box-shadow: inset 0 -0.1875rem #0078ff;
    border-radius: 0;
    padding: 0.5rem 0;
    background-color: transparent;
  }

  #Button2:hover{
    color:#0078FF;
    border: 0;      
  }
  

  #Button2:active{
    color: #0078FF;
    border: 0;
    box-shadow: inset 0 -0.1875rem #0078ff;
    border-radius: 0;
    padding: 0.5rem 0;
    background-color: transparent;
  }

  #Button3:hover{
    color:#0078FF;
    border: 0;      
  }
  

  #Button3:active{
    color: #0078FF;
    border: 0;
    box-shadow: inset 0 -0.1875rem #0078ff;
    border-radius: 0;
    padding: 0.5rem 0;
    background-color: transparent;
  }


  .nav-tabs{
    margin-left:1rem;
  }

  & a{
    border: 0;
    border-radius: 0;
    padding: 0.5rem 0;
    color: #263747;
    display: block;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
  
  }
`;

export default SecondNavBar;
