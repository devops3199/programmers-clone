import React from "react";
import styled from "styled-components";


const NavBar = (props) => {

  return ( 
        <BlackBar>
          <SetLogo>        
              <img 
               src="https://programmers.co.kr/assets/bi-programmers-light-0d164d49b51a123bab5cca11106145d6fac5a5ac04b8646780369c2a5bc0dd79.png"
               width="182"
               height="34"             
               />
          </SetLogo> 
          <NavbarMenuDiv> 

            <NavbarGlobalUl>           
             <NavbarGlobalLi><a href="/" id="Mousehover">탑 프로그래머스</a></NavbarGlobalLi>
             <NavbarGlobalLi><a href="/" id="Mousehover">실력 체크</a></NavbarGlobalLi>
             <NavbarGlobalLi><a href="/" id="Mousehover">개발자 채용</a></NavbarGlobalLi>
             <NavbarGlobalLi><a href="/" id="Mousehover">테크 피드</a></NavbarGlobalLi> 
             <NavbarGlobalDivider></NavbarGlobalDivider>
             <NavbarGlobalLi><a href="/" 
                              id="Mousehover"
                              >코딩테스트 연습</a></NavbarGlobalLi>  
             <NavbarGlobalLi><a href="/" id="Mousehover">프로그래밍 강의</a></NavbarGlobalLi>   
            </NavbarGlobalUl> 

            <NavbarUserUl>
              <NavbarUserLi><a href="/" id="Mousehover">계정 만들기</a></NavbarUserLi>
              <NavbarUserLi><a href="/" id="Mousehover">로그인</a></NavbarUserLi>
              <NavbarUserLi><a href="/" id="Mousehover">기업 회원</a></NavbarUserLi>
            </NavbarUserUl> 

          </NavbarMenuDiv>   
        </BlackBar>
  );
};

const BlackBar = styled.div`
    display: flex;
    height: 45px; 
    background: #0C151C;
    padding: 0.375rem 1rem;
    position: relative;
    // flex-wrap: wrap;
    //align-items: center;
    // justify-content: space-between;
`;

const SetLogo = styled.a`    
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`;

const NavbarMenuDiv = styled.div`
  flex-grow: 1;
  align-items: center;
  display: flex;
  
  
`;

const NavbarGlobalUl = styled.ul`

  display: flex !important;
  flex-basis: auto;
  //flex-basis: 100%;
  flex-grow: 1;
  align-items: center;

  transform: translateX(calc(-50% + 40rem));
  left: calc(50% - 40rem);
  position: absolute; 
 
`;

const NavbarGlobalLi = styled.li`
  display:inline-block;
  vertical-align:middle; /*li 메뉴바높이 있어도 세로가운데정렬 적용안됨>>td에만 적용됨>>display를 td로바꿔줘야>>ul에 display로 table속성을 줘서 왼쪽 치우친것 펼쳐 정렬되도록*/
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;

  #Mousehover:hover{
    color:#fff;
  }
  & a {
    text-decoration: none;
    padding: 0 0.5rem 0 0.5rem;
    color: #B2C0CC;
    font-weight: 700;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

`;

const NavbarGlobalDivider=styled.li`

  
  width: 0.0625rem;
  height: 0.75rem;
  background-color: #44576C;
  //margin: 0.6875rem 0.5rem 0 0.5rem;
  margin: 0rem 0.5rem 0 0.5rem;
  list-style: none;


`;

const NavbarUserUl=styled.ul`
  
  flex-direction: row;
  flex-wrap:wrap;
  margin-left: auto !important;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none; 
  margin-top:0;
  flex-grow:0.03;
  


`;

const NavbarUserLi=styled.li`

  display:inline-block;
  vertical-align:middle; /*li 메뉴바높이 있어도 세로가운데정렬 적용안됨>>td에만 적용됨>>display를 td로바꿔줘야>>ul에 display로 table속성을 줘서 왼쪽 치우친것 펼쳐 정렬되도록*/
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;

  #Mousehover:hover{
    color:#fff;
  }

  & a {
    text-decoration: none;
    padding: 0 0.5rem 0 0.5rem;
    color: #B2C0CC;
    font-weight: 700;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }


`;


export default NavBar;
