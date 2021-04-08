import React from "react";
import styled from "styled-components";
import {useState} from "react";


const SecondNavBar = (props) => {
  const [btnClick,setBtnClick]=useState(false);
  const navLinkActive=()=>{
      setBtnClick(!btnClick);
  }

//클릭했을 때 class를 nav-link-active로 바꿔주기
//다른게 클릭되면 일반 클래스로 돌아가기

  return (
   <ChallengesTab>
     <ChallengesTabUl>
       <ChallengesTabLi><a  
                        id="MouseEvent" 
                        width= "145.479px" 
                        onClick={()=>{
                          setBtnClick(!btnClick);
                          console.log(btnClick);
                          // btnClick ? console.log('클릭후') : console.log('클릭전');
                        }}>
                          
                          코딩테스트 고득점 Kit</a></ChallengesTabLi>
       <ChallengesTabLi><a href="/" className="nav-tabs" id="MouseEvent" width= "103.562px">SQL 고득점 Kit</a></ChallengesTabLi>
       <ChallengesTabLi><a href="/" className="nav-tabs" id="MouseEvent" width= "62.667px">모든 문제</a></ChallengesTabLi>
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
  
  #MouseEvent:visited{
    // color: #0078FF;
    // border: 0;
    // box-shadow: inset 0 -0.1875rem #0078ff;
    // border-radius: 0;
    // padding: 0.5rem 0;
    // background-color: transparent;
  }
  
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

const ChallengesTabA=styled.a`

`;

export default SecondNavBar;
