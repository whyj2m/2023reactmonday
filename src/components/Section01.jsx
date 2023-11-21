import React from 'react';

const Section01 = () => {
  return (
    <div className="section01">
      <div className="layout">
        <div className="txt1">
          <em>SAFELY COOL</em>
          <h3>
            RETRO-<br />
            REFLECTIVE<br />
            MATERIAL
          </h3>
          <p>SAFELY COOL</p>
        </div>
        <div className='img'>
          <img src="./images/img01.png" alt="" />
        </div>
        <div className="txt2">
          <em>All colors available</em>
          <h3>SINCE</h3>
          <p>
            LitFlexir aspires to break<br />
            the boundaries of perception.<br />
            LitFlexir makes every color<br />
            shine on its own
          </p>
          <h4>
            1997<br />
            IN KOREA
          </h4>
        </div>
        <div className="button-wrap">
          <a href="/" className="button-type1">
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section01;
