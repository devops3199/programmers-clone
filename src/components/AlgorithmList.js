import styled from 'styled-components';
import { Mysql, Oracle } from '../media/svg/SvgIcon';

const AlgorithmList = (props) => {
    return (
        <Row>
            <ColItem>
                <ItemContent>
                    <a>
                        <span>크레인 인형뽑기 게임</span>
                        <div>
                            <span>2019 카카오 개발자 겨울 인턴쉽</span>
                            <span>15167명 완료</span>
                        </div>
                    </a>
                    <div>
                        {/* <Mysql/>
                        <Oracle/> */}
                    </div>
                </ItemContent>
            </ColItem>
            <ColItem>
                <ItemContent>
                <a>
                        <span>크레인 인형뽑기 게임</span>
                        <div>
                            <span>2019 카카오 개발자 겨울 인턴쉽</span>
                            <span>15167명 완료</span>
                        </div>
                    </a>
                    <div>
                        {/* <Mysql/>
                        <Oracle/> */}
                    </div>
                </ItemContent>
            </ColItem>
            <ColItem>
                <ItemContent>
                <a>
                        <span>크레인 인형뽑기 게임</span>
                        <div>
                            <span>2019 카카오 개발자 겨울 인턴쉽</span>
                            <span>15167명 완료</span>
                        </div>
                    </a>
                    <div>
                        {/* <Mysql/>
                        <Oracle/> */}
                    </div>
                </ItemContent>
            </ColItem>
            <ColItem>
                <ItemContent>
                <a>
                        <span>크레인 인형뽑기 게임</span>
                        <div>
                            <span>2019 카카오 개발자 겨울 인턴쉽</span>
                            <span>15167명 완료</span>
                        </div>
                    </a>
                    <div>
                        {/* <Mysql/>
                        <Oracle/> */}
                    </div>
                </ItemContent>
            </ColItem>
        </Row>
    );  
};

const Row = styled.div`
    transform: translateX(-0.5rem);
    display: flex;
    flex-flow: wrap;
    padding: 0;
    margin: 0;
    width: calc(100% + 1rem);
`;

const ColItem = styled.div`
    width: calc(100% / 2);
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

export default AlgorithmList;