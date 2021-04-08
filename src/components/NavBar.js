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
               id="icon1"             
               />
               <img
                src="https://programmers.co.kr/assets/bi-symbol-light-49a242793b7a8b540cfc3489b918e3bb2a6724f1641572c14c575265d7aeea38.png"
                width="24"
                height="34"
                id="icon2"
               />
          </SetLogo> 
          <SetButton>
              <IconBar1></IconBar1>
              <IconBar2></IconBar2>
              <IconBar2></IconBar2>
          </SetButton>

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
   
    align-items: center;
    justify-content: space-between;

    @media (min-width: 992px){
      flex-flow: row nowrap;
      justify-content: flex-start;

    }
`;


const SetLogo = styled.a`    
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    
    #icon1{
      @media (max-width: 991px)
      {
        display: none;
      }
    }

    #icon2{
      @media (min-width: 991px)
      {
        display: none;
      }

      @media (max-width: 991px)
      {
        display: block;
      }
    }

   

`;

const SetButton=styled.button`

  @media (min-width: 992px)
  {
    display:none;
  }
  color: rgba(255,255,255,0.5);
  border-color: rgba(255,255,255,0.1);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0.5rem;
  background-color: transparent;
  border: 0;
  overflow: visible;
  

`;

const IconBar1=styled.span`
  background-color: white;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  
`;

const IconBar2=styled.span`
  background-color: white;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin-top: 4px;
`;
const NavbarMenuDiv = styled.div`
  
  @media (min-width: 992px){
    display: flex !important;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;
  }

  @media (max-width: 991px){
    padding: 0;
    display: none;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }
  
`;

const NavbarGlobalUl = styled.ul`

  @media (min-width: 1200px)
  {
    transform: translateX(calc(-50% + 40rem));
    left: calc(50% - 40rem);
    position: absolute;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 0;
  }

  @media (min-width: 992px)
  {
    flex-direction: row;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 0;
  }

  @media (max-width: 991px)
  {
    padding: 0.75rem 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 0;

  }


  // display: flex !important;
  // flex-basis: auto;
  // //flex-basis: 100%;
  // flex-grow: 1;
  // align-items: center;
  // list-style: none;
  // transform: translateX(calc(-50% + 40rem));
  // left: calc(50% - 40rem);
  // position: absolute; 
 
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
  margin: 0rem 0.5rem 0 0.5rem;
  margin-top:8px;
  list-style: none;

  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;

`;

const NavbarUserUl=styled.ul`
 
  @media (min-width: 992px){
    flex-direction: row;
    flex-wrap:wrap;
    margin-left: auto !important;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none; 
    margin-top:0;
    flex-grow:0.03;
  }
    
  @media (max-width: 991px){

    border-top: 0.0625rem solid #172334;
    padding: 0.75rem 0;
    margin-left: auto !important;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 0;
  }

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
