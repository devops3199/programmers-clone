import styled from 'styled-components';
import Filter from '../components/Filter';
import AlgorithmList from '../components/AlgorithmList';

const Problem = (props) => {
  const level = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];
  const lang = ["C", "C++", "C#", "Go", "Java"];
  const reference = [
    "2021 KAKAO BLIND RECRUITMENT",
    "2020 KAKAO BLIND RECRUITMENT",
    "2019 KAKAO BLIND RECRUITMENT",
    "2020 카카오 인턴십",
    "2017 카카오 예선",
  ];

  return (
    <Container>
      <ContentWrapper>
        <FilterSection>
          <Filter is_first={true} category="난이도" list={level} />
          <Filter category="프로그래밍 언어" list={lang} />
          <Filter category="문제 모음" list={reference} />
        </FilterSection>
        <ProblemSection>
          <Row>
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
            <AlgorithmList />
          </Row>
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
`;

const ProblemSection = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 66.666667%;
  max-width: 60%;
`;

const Row = styled.div`
  transform: translateX(-0.5rem);
  display: flex;
  flex-flow: wrap;
  padding: 0;
  margin: 0;
  width: calc(100% + 1rem);
`;

export default Problem;