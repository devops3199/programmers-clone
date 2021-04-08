import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Down } from '../media/svg/SvgIcon';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../redux/modules/filter';
import { setFilteredPostAWS } from '../redux/modules/post';

const Filter = (props) => {
    const dispatch = useDispatch();
    const filter_box = React.useRef();
    const [tog, setTog] = React.useState(true); // Show & Hide Toggle
    const { is_first, category } = props;
    const [arr, setArr] = React.useState([]); // 화면에 보여질 필터 리스트

    const GetCategory = (val) => {
        switch(val){
            case "난이도":
                return "level";
            case "프로그래밍 언어":
                return "language";
            case "문제 모음":
                return "reference";
            default:
                return null;
        }
    };

    const Toggle = () => {
        if(tog){
            filter_box.current.style.height = '0';
            filter_box.current.style.display = 'none';
            setTog(false);
        } else {
            filter_box.current.style.display = 'block';
            filter_box.current.style.height = `auto`;
            setTog(true);
        }
    };

    const AddFilter = (e) => {
        let checked = e.target.checked;
        let val = e.target.parentNode.childNodes[1].textContent;

        let temp = GetCategory(category);

        if (checked) {
            // add filter
            dispatch(addFilter(val, temp));
            dispatch(setFilteredPostAWS(val, temp));
        } else {
            // remove filter
            dispatch(removeFilter(val, temp));
            dispatch(setFilteredPostAWS(val, temp));
        }
    };

    React.useEffect(() => {
        let list_arr = [];
        switch(category) {
            case "난이도":
                axios.get('http://54.180.113.24/filter/level').then((res)=>{
                    res.data.forEach((val) => {
                        list_arr.push(val.level);
                    });
                    setArr(list_arr);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
            case "프로그래밍 언어":
                axios.get('http://54.180.113.24/filter/language').then((res)=>{
                    res.data.forEach((val) => {
                        list_arr.push(val.language);
                    });
                    setArr(list_arr);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
            case "문제 모음":
                axios.get('http://54.180.113.24/filter/reference').then((res)=>{
                    res.data.forEach((val) => {
                        list_arr.push(val.reference);
                    });
                    setArr(list_arr);
                }).catch((err)=>{
                    console.log(err);
                });
                break;
        }
    }, []);

    return(
        <FilterContainer>
            {is_first ? 
            (<>
                <div>
                    <HeaderTitle onClick={Toggle}>
                        <Category>{category}</Category>
                        <span>
                            <Down />
                        </span>
                    </HeaderTitle>
                </div>
            </>) : 
            (<>
                <FilterHeader>
                    <HeaderTitle onClick={Toggle}>
                        <span>{category}</span>
                        <span>
                            <Down />
                        </span>
                    </HeaderTitle>
                </FilterHeader>
            </>)}
            <FilterList ref={filter_box}>
                {arr.map((val, index) => {
                    let temp = GetCategory(category);
                    let name = `filter_${temp}_${index}`;
                    return (
                        <List key={index}>
                            <FilterInput id={name} type='checkbox' onClick={AddFilter} />
                            <FilterLabel htmlFor={name}>
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

    & svg {
        float: right;
        fill: #263747;
        width: 1.5rem;
        height: 1.5rem;
        transition: transform .2s;
    }
`;

const Category = styled.span`
    display: inline-block;
    vertical-align: top;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 800;
`;

const FilterList = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    height: auto;
    transition: height .3s ease-out;
`;

const List = styled.li`
    position: relative;
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
    margin: 0 0 0 -10px;
    position: absolute;

    :checked + label:after{
        content: '';
        background: url(https://programmers.co.kr/assets/img-check-light-bcda1ac96cc8d1e2b0a4087aa60ff04b9b15d649a3b4b72a28f8f1112f42827b.png) no-repeat center;
        background-size: auto;
        background-size: cover;
        background-color: #263747;
        border: 0.35rem solid #263747;
        border-radius: 0.25rem;
        width: 0.875rem;
        height: 0.75rem;
        display: block;
        position: absolute;
        top: 0.1rem;
        left: 0.05rem;
    }
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


    & span {
        font-size: 14px;
        font-weight: 400;
    }
`;

export default Filter;