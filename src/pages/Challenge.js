import styled from 'styled-components';
import Filter from '../components/Filter';
import Pager from '../components/Pager';
import Algorithm from '../components/Algorithm';
import { Level, Language, Reference, AlgorithmLists } from '../shared/response';

const Challenge = (props) => {

  const algorithms = AlgorithmLists.result;

  return (
    <Container>
      <ContentWrapper>
        <FilterSection>
          <Filter is_first={true} category="난이도" list={Level.result} />
          <Filter category="프로그래밍 언어" list={Language.result} />
          <Filter category="문제 모음" list={Reference.result} />
        </FilterSection>
        <ProblemSection>
          <Row>
            {algorithms.map((val, index) => {
              return (
                <Algorithm key={index} list={val} />
              );
            })}
          </Row>
          <PagerSection>
            <Pager/>
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

const PagerSection = styled.div`
  display: flex;
  justify-content: center !important;
`;

export default Challenge;