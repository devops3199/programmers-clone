import React from 'react';
import styled from 'styled-components';
import { Down } from '../media/svg/SvgIcon';

const Filter = (props) => {
    const filter_box = React.useRef();
    const [tog, setTog] = React.useState(true);
    const { is_first, category, list } = props;

    const Toggle = () => {
        let height = filter_box.current.scrollHeight;

        if(tog){
            //filter_box.current.style.visibility = 'hidden';
            filter_box.current.style.height = '0';
            //down_svg.current.style.transform = 'rotate(180deg)';
            setTog(false);
        } else {
            //filter_box.current.style.visibility = 'visible';
            filter_box.current.style.height = `${height}px`;
            //down_svg.current.style.transform = 'rotate(-180deg)';
            setTog(true);
        }
    };

    if(is_first) {
        return (
            <FilterContainer>
                <div>
                    <HeaderTitle onClick={Toggle}>
                        <span>{category}</span>
                        <Down className='down_svg' />
                    </HeaderTitle>
                </div>
                <FilterList ref={filter_box}>
                    {list.map((val, index) => {
                        return (
                            <List key={index}>
                                <FilterInput id='challenge_filter_level_1' type='checkbox' data-filter='1' data-filter-type='level' />
                                <FilterLabel htmlFor='challenge_filter_level_1'>
                                    <span>{val}</span>
                                </FilterLabel>
                            </List>
                        );
                    })}
                </FilterList>
            </FilterContainer>
        );
    }

    return(
        <FilterContainer>
            <FilterHeader>
                <HeaderTitle onClick={Toggle}>
                    <span>{category}</span>
                    <Down className='down_svg' />
                </HeaderTitle>
            </FilterHeader>
            <FilterList ref={filter_box}>
                {list.map((val, index) => {
                    return (
                        <List key={index}>
                            <FilterInput id='challenge_filter_level_1' type='checkbox' data-filter='1' data-filter-type='level' />
                            <FilterLabel htmlFor='challenge_filter_level_1'>
                                <span>{val}</span>
                            </FilterLabel>
                        </List>
                    );
                })}
            </FilterList>
        </FilterContainer>
    );
};

Filter.defaultProps = {
    is_first : false,
    category : '',
    list : [],
};

const FilterContainer = styled.div`
    box-size: border-box;
`;

const FilterHeader = styled.div`
    margin: 1rem 0 0 0;
    padding: 1rem 0 0 0;
    border-top: 0.0625rem solid #D7E2EB;
`;

const HeaderTitle = styled.a`
    display: block;
    text-decoration: none;
    cursor: pointer;

    :hover {
        color: #0078FF;

        & svg {
            fill: #0078FF;
        }
    }

    & span {
        display: inline-block;
        vertical-align: top;
        line-height: 1.5rem;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 800;
    }

    & svg {
        float: right;
        fill: #263747;
        width: 1.5rem;
        height: 1.5rem;
        transition: transform .2s;
    }
`;

const FilterList = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 150px;
    visibility: visible;
    transition: height .3s ease-out;
`;

const List = styled.li`
    display: block;
    margin-top: .5rem;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.009em;

    :hover {
        color: #0078FF;
    }
`;

const FilterInput = styled.input`
    pointer-events: none;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    margin: 0;
    position: absolute;
`;

const FilterLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 1rem 0 0;
    min-height: unset;
    cursor: pointer;

    &:before {
        transition-duration: 0.08s;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-delay: initial;
        font-size: 1.25rem;
        content: '';
        display: inline-block;
        margin-right: 0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        min-width: 1.25rem;
        max-width: 1.25rem;
        border-radius: 0.25rem;
        border: 0.125rem solid #CDD7E0;

        ${List}:hover & {
            background-color: #263747;
            border: 0.125rem solid #263747;
        }
    }

    &:after {
        content: '';
        background: url(https://programmers.co.kr/assets/img-check-light-bcda1ac96cc8d1e2b0a4087aa60ff04b9b15d649a3b4b72a28f8f1112f42827b.png) no-repeat center;
        background-size: auto;
        background-size: cover;
        width: 0.875rem;
        height: 0.75rem;
        display: block;
        position: absolute;
        top: 0.25rem;
        left: 0.1875rem;
    }

    & span {
        font-size: 14px;
        font-weight: 400;
    }
`;

export default Filter;