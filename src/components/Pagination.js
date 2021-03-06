import React from 'react';
import styled from 'styled-components';
import { setPageIndex } from '../redux/modules/post';
import { useDispatch } from 'react-redux';

const Pagination = (props) => {
    const dispatch = useDispatch();
    const pages = new Array(Math.ceil(props.total / 20)).fill(0); // 총 몇 페이지 필요할지 계산
    const [currentPage, setCurrentPage] = React.useState(1);
    const [prevPage, setPrevPage] = React.useState('pagination_1');

    const GetPage = (e) => {
        setCurrentPage(parseInt(e.target.text));
    }; 

    React.useEffect(() => {
      // deactive, 다음 페이지로 넘어갔으니 전에 있던 페이지는 원상 복구
      let deactive_paginator = document.getElementsByClassName(prevPage);
      deactive_paginator[0].style.color = '#263747';
      deactive_paginator[0].style.backgroundColor = 'rgba(50,50,124,0.08)';

      // active, 현재 페이지가 어딘지 표시
      let name = `pagination_${currentPage}`;
      let active_paginator = document.getElementsByClassName(name);
      active_paginator[0].style.color = '#fff';
      active_paginator[0].style.backgroundColor = '#0078FF';

      setPrevPage(name);

      const indexOfLastPage = currentPage * 20;
      const indexOfFirstPage = indexOfLastPage - 20;

      dispatch(setPageIndex(indexOfFirstPage, indexOfLastPage));

    }, [currentPage]);

    return (
      <NavPager>
        <PageList>
          <PageItem>
            <a
              onClick={() => {
                if(currentPage <= pages.length && currentPage > 1){
                    setCurrentPage(currentPage - 1);
                }
              }}
            >
              이전
            </a>
          </PageItem>
          {pages.map((val, index) => {
            let name = `pagination_${index + 1}`;
            return (
              <PageItem key={index}>
                <a className={name} onClick={GetPage}>
                  {index + 1}
                </a>
              </PageItem>
            );
          })}
          <PageItem>
            <a
              onClick={() => {
                if(currentPage < pages.length && currentPage >= 1){
                    setCurrentPage(currentPage + 1);
                }
              }}
            >
              다음
            </a>
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
    & a {
        color: #263747;
        background-color: rgba(50,50,124,0.08);
        position: relative;
        padding: 0.25rem 0.75rem;
        border: 0;
        text-decoration: none;
        font-weight: 500;
        cursor: pointer; 

        :hover {
            color: #263747;
            background-color: rgba(50,50,124,0.16);
        }
    }
`;

export default Pagination;