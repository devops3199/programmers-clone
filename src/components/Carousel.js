import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Previous, Next } from '../media/svg/SvgIcon';

const Carousel = (props) => {
    const container = React.useRef();
    const slider_container = React.useRef();
    const bullet = React.useRef();
    const prev = React.useRef();
    const next = React.useRef();

    const [current_index, setCurrentIndex] = React.useState(0); // 현재 보여지는 슬라이더
    const [stop, setStop] = React.useState(false); // 사용자가 이전/다음 버튼누르면 자동 슬라이딩 종료
    const [banner, setBanner] = React.useState([]); // 슬라이더 정보

    const MoveSlide = (index) => {
        let slider = slider_container.current;
        slider.style.left = (-100 * index) + '%'; // 좌측으로 이동
        setCurrentIndex(index);

        // 버튼 활성화 설정
        if(index === 5) {
            next.current.style.display = 'none';
        } else if (index === 0) {
            prev.current.style.display = 'none';
        } else {
            next.current.style.display = 'flex';
            prev.current.style.display = 'flex';
        }

        LightBullet(index);
    };

    // 하단 흰색 동그라미 효과 
    const LightBullet = (index) => {
        let prev = null;
        let next = null;

        if(index === 0){
            next = document.getElementsByClassName(`bullet-${index+1}`);
            next[0].style.opacity = '.35';
        } else if (index < 5) {
            next = document.getElementsByClassName(`bullet-${index+1}`);
            next[0].style.opacity = '.35';
        }

        if(index > 0 && index < 6){
            prev = document.getElementsByClassName(`bullet-${index-1}`);
            prev[0].style.opacity = '.35';
        }
        
        let bullet = document.getElementsByClassName(`bullet-${index}`);
        bullet[0].style.opacity = '1';
    };

    React.useEffect(() => {
        // get image & link from server
        axios.get('http://54.180.113.24/banner').then((res)=>{
            setBanner(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);

    React.useEffect(() => {
        let index = 0;

        // 2.5초 마다 해당 함수 호출
        const slide_timer = setInterval(() => {
            if(index === 6){
                index = 0;
                let bullet = document.getElementsByClassName('bullet-5');
                bullet[0].style.opacity = '.35';
            } 
            MoveSlide(index++);
        }, 2500); 
        
        if(stop) {
            clearInterval(slide_timer);
        }

        return () => {
            clearInterval(slide_timer);
        };
    }, [stop]);


    return (
      <>
        <Temp>
          <CarouselContainer ref={container}>
             <BulletContainer>
                {banner.map((val, index) => {
                    let name = 'bullet-' + index;
                    return (
                    <Bullet key={index} className={name} ref={bullet}/>
                    );
                })}
            </BulletContainer>
            <PrevContainer className='prevButton' ref={prev} onClick={() => { MoveSlide(current_index - 1); setStop(true); }}>
                <Previous/>
            </PrevContainer>
            <NextContainer className='nextButton' ref={next} onClick={() => { MoveSlide(current_index + 1); setStop(true); }}>
                <Next/>
            </NextContainer>
            <SlideContainer ref={slider_container}>
              {banner.map((val, index) => {
                let value = index * 100;
                let url = `url(${val.image}) no-repeat center`;

                const slide_style = {
                    left: `${value}%`,
                    background: `${url}`,
                    backgroundSize: 'cover',
                };

                return (
                  <Slide className='slide' key={index} style={slide_style} href={val.link} target='_blank' />
                );
              })}
            </SlideContainer>
          </CarouselContainer>
        </Temp>
      </>
    );
};

const Temp = styled.div`
    max-width: 1200px;
    height: 13.625rem;
    margin: 0 auto;
    padding: 0 16px;
    margin-top: 1.5rem;
`;

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
`;

const SlideContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    transition: left .3s ease-in;
`;

const Slide = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 15px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
`;

const PrevContainer = styled.div`
    z-index: 1;
    position: absolute;
    top: 40%;
    left: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    background-color: #142029;
    border-radius: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity .3s;

    & svg {
        fill: #fff;
        width: 1.5rem;
        height: 1.5rem;
    }
    
    ${CarouselContainer}:hover & {
        opacity: 1;
    }
`;

const NextContainer = styled.div`
    z-index: 1;
    position: absolute;
    top: 40%;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    background-color: #142029;
    border-radius: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity .3s;

    & svg {
        fill: #fff;
        width: 1.5rem;
        height: 1.5rem;
    }

    ${CarouselContainer}:hover & {
        opacity: 1;
    }
`;

const BulletContainer = styled.div`
    position: absolute;
    bottom: 0.5rem;
    width: 100%;
    text-align: center;
    z-index: 1;
`;

const Bullet = styled.span`
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background-color: #fff;
    opacity: .32;
    margin: 0 4px;
    transition: opacity .3s;
`;

export default Carousel;