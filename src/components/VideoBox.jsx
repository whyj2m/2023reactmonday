import React, { useRef, useEffect } from 'react';
import '../App.css'; // 별도의 CSS 파일을 불러옵니다.

const VideoBox = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const scroll = () => {
      // 가로 스크롤 로직
      scroller.scrollLeft += 1;

      // 스크롤이 오른쪽 끝에 도달하면 왼쪽으로 이동
      if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
        scroller.scrollLeft = 0;
      }

      // requestAnimationFrame으로 다음 프레임에서도 스크롤 이벤트를 계속 호출
      requestAnimationFrame(scroll);
    };

    // 초기 스크롤 시작
    const animationFrameId = requestAnimationFrame(scroll);

    // 언마운트 시 애니메이션 중단
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <div className="video-box">
      <video id="myVideo" autoPlay loop muted playsInline>
        <source src="./images/litflexer_1.mp4" type="video/mp4" />
        <source src="./images/litflexer_1.mp4" type="video/mp4" />
      </video>
      <div className="txt-wrap">
        <div className="txt1">
          Retro-<br />
          Reflective material
          <span>: All colors to shine</span>
        </div>
        <div className="txt2">
          Safely Cool
          <span>
            : LitFlexir makes every<br />
            color shine on its own.
          </span>
        </div>
      </div>
      <span className="txt-obj1"><img src="./images/txt_img1.svg" alt="" /></span>
      <div className="bottom-txt">
        <div className="scroller-container" ref={scrollerRef}>
          <ul className="scroller-content">
            <li>
              <img src="./images/txt_img2.png" alt="" />
            </li>
            <li>
              <img src="./images/txt_img2.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default VideoBox;
