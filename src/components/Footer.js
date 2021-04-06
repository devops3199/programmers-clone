import React from "react";
import styled from "styled-components";

const Footer = (props) => {
    return (
        <FooterWrap>
            <FullWidth>
                <FooterContainer>
                    <FooterHeader>
                        <FooterHeaderRow>
                            <RowDivide>
                                <RowH6>
                                    <a href="/">2021 프로그래머스</a>
                                </RowH6>
                                
                                <RowUl>
                                    <RowLi><a href="/" id="MouseEvent">개발자용 프로그래머스</a></RowLi>
                                    <RowLi><a href="/" id="MouseEvent">기업용 프로그래머스</a></RowLi>
                                    <RowLi><a href="/" id="MouseEvent">프로그래머스 스쿨</a></RowLi>
                                    <RowLi><a href="/" id="MouseEvent">개인정보 처리방침</a></RowLi>
                                    <RowLi><a href="/" id="MouseEvent">이용약관</a></RowLi>
                                    <RowLi><a href="/" id="MouseEvent">FAQ/문의</a></RowLi>
                                </RowUl>
                            </RowDivide>
                        </FooterHeaderRow>
                    </FooterHeader>
                    <FooterAddress>
                        <p>(주)그렙 / 공동대표 이확영, 임성수 / 
                            서울특별시 강남구 테헤란로 151, 723호(역삼동, 역삼하이츠빌딩) / 
                            사업자등록번호 220-88-75699 / 통신판매업신고 제 2014-서울강남-03241호 / 
                            직업정보제공사업 신고번호 J1200020180027 / 유료직업소개사업 등록번호 
                            (국내)제2019-3220237-14-5-00020호</p>
                        <MakeMarginTop>기업 서비스: 02-539-1886</MakeMarginTop>
                        
                        <NoMargins>교육 내용 관련 문의 : 02-539-1885</NoMargins>
                        <NoMargins>☎ 교육 결제, 환불 관련 문의 - <a href="/">문의하기</a></NoMargins>
                        <NoMargins>제휴 및 서비스 운영, 기타 문의 : 02-539-1882</NoMargins>
                        <NoMargins>☎ 코딩 테스트(응시자) 문의 - <a href="/">문의하기</a></NoMargins>

                        <MakeMarginTop>문의하기 운영시간 : 오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)</MakeMarginTop>
                        <NoMargins>점심시간 : 오후 12시 ~ 오후 1시</NoMargins>
                        
                       
                    </FooterAddress>

                </FooterContainer>
            </FullWidth>
        </FooterWrap>
    );

};

const FooterWrap= styled.div`
    margin-top: 5rem !important;
    height: 21.125rem;
    background: #fff;
    display: block;

`;

const FullWidth=styled.footer`
    width: 100%;
    max-width: 100%;
    box-shadow: inset 0 0.0625rem 0 0 #d7e2eb;
    padding: 2.5rem 0;
    padding-left: 0 !important;
    padding-right: 0 !important;
`;

const FooterContainer=styled.div`
    max-width: 1200px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 16px;
    padding-right: 16px;
`;

const FooterHeader=styled.div`
    width: auto;
    display: block;
`;
const FooterHeaderRow=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding-left: 0px;
    padding-right: 0px;

`;

const RowDivide=styled.div`
    padding-right: 1rem;
    padding-left: 1rem;

    flex: 0 0 50%;
    max-width: 50%;

    position: relative;
    width: 100%;
`;
const RowH6=styled.h6`

    font-size: 14px;
    line-height: 1.5;
    
    margin-top: 0px;
    margin-bottom: 0px;

    & a {
        margin-left: 0;
        color: #44576C;
        
        font-weight: 700;
        -webkit-font-smoothing: antialiased;

        transition-duration: 0.08s;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-delay: initial;
        
        text-decoration: none;
        cursor: pointer;
    }
   
`;

const RowUl=styled.ul`
    float: none;
    margin-top: 0.625rem;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-wrap: wrap;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    
    list-style-type: disc;
    text-align: left;

    margin-top: 10px;
    margin-bottom: 0px;
    padding-left: 0px;
`;

const RowLi=styled.li`
    float: none;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: -0.009em;
    display: list-item;
    text-align: -webkit-match-parent;
    list-style: none;

    & a {
        display: table;
        margin: 0;
        padding: 0;
        font-size: 0.8125rem;
        color: #8CA5AF;
        line-height: 1.25rem;
        
        transition-duration: 0.08s;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-delay: initial;
        text-decoration: none;
        cursor: pointer;

        background-color: transparent;
    }

    #MouseEvent:hover{
        color:#0078FF;
        border: 0;      
      }
`;

const FooterAddress=styled.div`
    margin-top: 1rem;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: #B2C0CC;

    display: block;

 
`;

const MakeMarginTop=styled.p`

    margin-top: 8px;  
    margin-bottom: 0px; 

`;

const NoMargins=styled.p`
   
    margin-top: 0px;
    margin-bottom: 0px;

    & a {
        color: #B2C0CC;
        transition-duration: 0.08s;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-delay: initial;
        
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
    }
`;
export default Footer;