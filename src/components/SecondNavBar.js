import React from "react";
import styled from "styled-components";

const SecondNavBar = (props) => {

  return (
   <ChallengesTab>
     <ChallengesTabUl>
       <ChallengesTabLi><a href="/" id="MouseEvent" width= "145.479px">코딩테스트 고득점 Kit</a></ChallengesTabLi>
       <ChallengesTabLi><a href="/" id="MouseEvent" width= "103.562px">SQL 고득점 Kit</a></ChallengesTabLi>
       <ChallengesTabLi><a href="/" id="MouseEvent" width= "62.667px">모든 문제</a></ChallengesTabLi>
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

`;

const ChallengesTabLi=styled.li`
  margin-bottom: 0; 
  font-size:16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  display: list-item;
  
  // padding-left: 0px;
  // padding-right: 0px;
  // padding-top: 8px;
  // padding-bottom: 8px;

  height: 25.333;

  text-align: -webkit-match-parent;

  background-color: transparent;
  border: 0;
  border-radius: 0;
  padding: 0.5rem 0;
  
  #MouseEvent:hover{
    color:#0078FF;
    border: 0;      
  }

  #MouseEvent:active{
    color: #0078FF;
    border: 0;
    box-shadow: inset 0 -0.1875rem #0078ff;
    border-radius: 0;
    padding: 0.5rem 0;
    background-color: transparent;
  }

  & a{
    text-decoration: none;
    
    padding: 0 0.5rem 0 0.5rem;
    color: #263747;
    font-weight: 400;
    padding-right: 0.5rem;
    padding-left: 0.5rem;

  }
`;

export default SecondNavBar;
