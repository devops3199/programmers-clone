import React from 'react';
import styled from 'styled-components';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Algorithm from '../components/Algorithm';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from '../redux/modules/filter';
import { setPostAWS } from '../redux/modules/post';

const Challenge = (props) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.list); // 현재 적용된 필터값들
  const total = useSelector((state) => state.post.total); // 총 몇개의 문제
  const algorithms = useSelector((state) => state.post.list); // 문제 리스트

  React.useEffect(() => {
    dispatch(setPostAWS()); // 문제 가져오기
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <FilterSection>
          <Filter is_first={true} category="난이도" />
          <Filter category="프로그래밍 언어" />
          <Filter category="문제 모음" />
        </FilterSection>
        <ProblemSection>
          {filter.length === 0 ? 
          (<></>) : 
          (<>
            <Filtered>
              {filter.map((val, index) => {
                return (
                  <FilterLabel key={index}>
                    <span>
                      {val.split('?')[0]}
                      <button onClick={(e) => {
                        let value = e.target.parentNode.textContent.slice(0,-1);
                        dispatch(removeFilter(value));
                      }}>X</button>
                    </span>
                  </FilterLabel>
                );
              })}
              <button onClick={() => {
                dispatch(clearFilter());
              }}>필터 초기화</button>
            </Filtered>
          </>)}
          <Row>
            {algorithms.map((val, index) => {
              return (
                <Algorithm key={index} list={val} />
              );
            })}
          </Row>
          <PagerSection>
            <Pagination total={total} />
          </PagerSection>
        </ProblemSection>
      </ContentWrapper>
    </Container>
  );
};


const Container = styled.section`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  padding: 0 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const FilterSection = styled.div`
  padding-left: 1rem;
  padding-right: 2.5rem;
  flex: 0 0 33.333333%;
  max-width: 30%;

  @media (max-width: 500px) {
    display: none;
  }
`;

const ProblemSection = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 66.666667%;
  max-width: 60%;
`;

const Filtered = styled.div`
  display: block;

  & > button {
    font-size: 11px;
    line-height: 1.5;
    margin: 0 1rem 0.5rem 0;
    padding: 0.0625rem 0.25rem 0 0.25rem;
    display: inline-block;
    letter-spacing: -0.009em;
    font-weight: 500;
    color: #0078FF;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }
`;

const FilterLabel = styled.div`
    display: inline-block;
    vertical-align: top;
    padding-bottom: 1rem;

    & > span {
      margin: 0 0.25rem 0.5rem 0;
      display: inline-flex;
      align-items: center;
      font-weight: 400;
      padding: 0.25rem 0.75rem;
      background-color: #0078FF;
      border-radius: 15px;
      color: #fff;
      font-size: 11px;
    }

    & > span > button {
      padding: 0;
      margin-left: 0.25rem;
      border: 0;
      background-color: transparent;
      font-size: 11px;
      line-height: 1.5;
      color: #fff;
      cursor: pointer;
    }
`;

const Row = styled.div`
  transform: translateX(-0.5rem);
  display: flex;
  flex-flow: wrap;
  padding: 0;
  margin: 0;
  width: calc(100% + 1rem);
`;

const PagerSection = styled.div`
  display: flex;
  justify-content: center !important;
`;

export default Challenge;