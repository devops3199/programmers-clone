import React from 'react';
import styled from 'styled-components';

const Pagination = (props) => {
    const pages = new Array(Math.ceil(props.total / 20)).fill(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [prevPage, setPrevPage] = React.useState('pagination_1');

    const GetPage = (e) => {
        setCurrentPage(parseInt(e.target.text));
    };

    React.useEffect(() => {
        // deactive
        let deactive_paginator = document.getElementsByClassName(prevPage);
        deactive_paginator[0].style.color = '#263747';
        deactive_paginator[0].style.backgroundColor = 'rgba(50,50,124,0.08)';

        // active
        let name = `pagination_${currentPage}`;
        let active_paginator = document.getElementsByClassName(name);
        active_paginator[0].style.color = '#fff';
        active_paginator[0].style.backgroundColor = '#0078FF';

        setPrevPage(name);
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
          {/* <PageItem className='skip'>
                    <a className='skip' style={disabled} href='/'>...</a>
                </PageItem> */}
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
        //color: #CDD7E0;
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

export default Pagination;