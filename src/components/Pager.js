import React from 'react';
import styled from 'styled-components';

const Pager = (props) => {

    const active = {
        color : '#fff',
        backgroundColor : '#0078FF',
        border : '',
    };

    const disabled = {
        color : '#CDD7E0',
        pointerEvent : 'none',
    };

    return(
        <NavPager>
            <PageList>
                <PageItem>
                    <a href='/'>이전</a>
                </PageItem>
                <PageItem>
                    <a style={active} href='/'>1</a>
                </PageItem>
                <PageItem>
                    <a href='/'>2</a>
                </PageItem>
                <PageItem>
                    <a href='/'>3</a>
                </PageItem>
                <PageItem>
                    <a href='/'>4</a>
                </PageItem>
                <PageItem>
                    <a href='/'>5</a>
                </PageItem>
                <PageItem className='skip'>
                    <a className='skip' style={disabled} href='/'>...</a>
                </PageItem>
                <PageItem>
                    <a href='/'>11</a>
                </PageItem>
                <PageItem>
                    <a href='/'>다음</a>
                </PageItem>
            </PageList>
        </NavPager>
    );
};

const NavPager = styled.nav`
    display: flex;
    padding-left: 0;
    margin: 0;
    border-radius: 0.25rem;
    justify-content: center;
`;

const PageList = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 2.5rem;
    padding-left: 0;

    & li:first-child > a {
        color: #CDD7E0;
        margin-left: 0;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    & li:last-child > a {
        margin-left: 0;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
`;

const PageItem = styled.li`
    :not(.skip){
        cursor: pointer;   
    }
    & a {
        color: #263747;
        background-color: rgba(50,50,124,0.08);
        position: relative;
        padding: 0.25rem 0.75rem;
        border: 0;
        text-decoration: none;
        font-weight: 500;

        :not(.skip):hover {
            color: #263747;
            background-color: rgba(50,50,124,0.16);
        }
    }
`;

export default Pager;