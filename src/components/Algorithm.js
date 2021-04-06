import React from 'react';
import styled from 'styled-components';
import Svg from './Svg';
import { Previous, Next, Down, Mysql, Oracle, CLang, CPlusPlus, CSharp, GoLang, Java, JavaScript, Kotlin, Python2, Python3, Ruby, Scala, Swift } from '../media/svg/SvgIcon';

const Algorithm = (props) => {

    const { problem_name, problem_reference, problem_solved, language } = props.list;

    return (
        <ColItem>
            <ItemContent>
                <ItemTitleBox>
                    <ItemTitle>{problem_name}</ItemTitle>
                    <ItemSubTitleBox>
                        <span>{problem_reference}</span>
                        <span>{problem_solved}명 완료</span>
                    </ItemSubTitleBox>
                </ItemTitleBox>
                <LangBox>
                    {language.map((val, index) => {
                        return (
                            <IconBox key={index}>
                                <IconLink>
                                    <Svg val={val}/>
                                </IconLink>
                            </IconBox>
                        );
                    })}
                </LangBox>
            </ItemContent>
        </ColItem>
    );  
};

const ColItem = styled.div`
    width: calc(95% / 2);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

const ItemContent = styled.div`
    position: relative;
    display: block;
    padding: 1rem 0 2rem 0;
    border-top: 0.0625rem solid #D7E2EB;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;

    &:before {
        transition-duration: 0.08s;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-delay: initial;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 1rem;
        width: 2.5rem;
        height: 0.1875rem;
        background-color: #2196F3;
        top: -0.0625rem;
        left: 0;
    }
`;

const ItemTitleBox = styled.a`
    transition-duration: 0.08s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
    text-decoration: none;
    cursor: pointer;
`;

const ItemTitle = styled.span`
    font-size: 20px;
    line-height: 1.6;
    letter-spacing: -0.009em;
    font-weight: 700;

    :hover{
        color: #0078FF;
    }
`;

const ItemSubTitleBox = styled.div`
    display: block;
    margin-top: 0.25rem;
    color: #B2C0CC;

    & span {
        font-size: 14px;
        line-height: 1.5;
    }

    & span:first-child {
        &:after{
            content: '•';
            margin: 0 0.375rem 0 0.625rem;
        } 
    }
`;

const LangBox = styled.div`
    margin-top: 0.5rem;
    font-size: 0;
`;

const IconBox = styled.div`
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
`;

const IconLink = styled.a`
    display: block;

    & svg {
        fill: #B2C0CC;
        width: 1.5rem;
        height: 1.5rem;
        transition: fill .3s;

        ${IconBox}:hover &{
            fill: #263747;
        }
    }
`;

export default Algorithm;