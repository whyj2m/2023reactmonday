import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Section02 = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="section02" id="pocs">
            <div className="layout">
              <div className="item1">
                <a href="/products/view?idx=17">
                  <div className="img">
                    <img src="/images/img02.png" alt="Image 1" /> 
                  </div>
                  <p>Lit.Solid</p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="section02" id="pocs">
            <div className="layout">
              <div className="item2">
                <a href="#pocs">
                  <div className="img">
                    <img src="/images/img03.png" alt="Image 2" /> 
                  </div>
                  <p>Retro-Reflective material</p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="section02" id="pocs">
            <div className="layout">
              <div className="item3">
                <a href="/products/view?idx=24">
                  <div className="img">
                    {/* 이미지 내용 추가 */}
                    <img src="/images/img04.png" alt="Image 3" /> {/* 이미지 추가 */}
                  </div>
                  <p>Lit.Mystic</p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section02" id="pocs">
            <div className="layout">
              <div className="item4">
                <a href="/products/view?idx=24">
                  <div className="img">
                    {/* 이미지 내용 추가 */}
                    <img src="/images/img05.png" alt="Image 3" /> {/* 이미지 추가 */}
                  </div>
                  <p>Lit.Mystic</p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section02" id="pocs">
            <div className="layout">
              <div className="item5">
                <a href="/products/view?idx=24">
                  <div className="img">
                    {/* 이미지 내용 추가 */}
                    <img src="/images/img06.png" alt="Image 3" /> {/* 이미지 추가 */}
                  </div>
                  <p>Lit.Mystic</p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Section02;
