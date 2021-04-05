import React from "react";
import styled from "styled-components";

const SecondNavBar = (props) => {

  return (
   <Challenges_tab>
     <Challenges_tab_ul>
       <Challenges_tab_li><a href="/" id="MouseEvent">코딩테스트 고득점 Kit</a></Challenges_tab_li>
       <Challenges_tab_li><a href="/" id="MouseEvent">SQL 고득점 Kit</a></Challenges_tab_li>
       <Challenges_tab_li><a href="/" id="MouseEvent">모든 문제</a></Challenges_tab_li>
     </Challenges_tab_ul>
   </Challenges_tab>
  );
};

const Challenges_tab= styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
`;

const Challenges_tab_ul=styled.ul`
  border-bottom: 0;
  //height:41px;
  box-shadow: inset 0 -0.0625rem #d7e2eb;
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

`;

const Challenges_tab_li=styled.li`
  //color: #0078FF;
  border: 0;
  //box-shadow: inset 0 -0.1875rem #0078ff;
  background-color: transparent;
  
  #MouseEvent:hover{
    color:#0078FF;
    border: 0;
   
  }

  #MouseEvent:active{
    
    box-shadow: inset 0 -0.1875rem #0078ff;
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
