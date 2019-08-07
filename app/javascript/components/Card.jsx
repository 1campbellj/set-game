import React from 'react';
import PropTypes from 'prop-types';

import './card';

const Diamond = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 62.8 112.7"
    >
      <g id="Layer_2" />
      <polygon className="st0" points="60,56.2 31.9,110.7 4,56.2 32.5,1.7 " />
    </svg>
  );
};

const DiamondHashed = () => {
  const html = `
    <style type="text/css">
      .diamondst1{clip-path:url(#diamond_2_);fill:#EE4823;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
    </style>
    <g id="Layer_2">
    </g>
    <polygon class="st0" points="60,56.2 31.9,110.7 4,56.2 32.5,1.7 "/>
    <g>
      <defs>
        <polygon id="diamond_1_" points="60,56.3 31.9,110.8 4,56.3 32.5,1.8 		"/>
      </defs>
      <clipPath id="diamond_2_">
        <use xlink:href="#diamond_1_"  style="overflow:visible;"/>
      </clipPath>
      <line class="diamondst1" x1="95.6" y1="16.5" x2="-20.9" y2="16.5"/>
      <line class="diamondst1" x1="100.4" y1="19.5" x2="-16.1" y2="19.5"/>
      <line class="diamondst1" x1="98.4" y1="22.5" x2="-18.1" y2="22.5"/>
      <line class="diamondst1" x1="103.3" y1="25.4" x2="-13.3" y2="25.4"/>
      <line class="diamondst1" x1="97.3" y1="28.4" x2="-19.2" y2="28.4"/>
      <line class="diamondst1" x1="102.1" y1="31.4" x2="-14.4" y2="31.4"/>
      <line class="diamondst1" x1="100.2" y1="34.4" x2="-16.3" y2="34.4"/>
      <line class="diamondst1" x1="105" y1="37.4" x2="-11.5" y2="37.4"/>
      <line class="diamondst1" x1="97.7" y1="40.3" x2="-18.9" y2="40.3"/>
      <line class="diamondst1" x1="102.5" y1="43.3" x2="-14" y2="43.3"/>
      <line class="diamondst1" x1="100.5" y1="46.3" x2="-16" y2="46.3"/>
      <line class="diamondst1" x1="105.4" y1="49.3" x2="-11.2" y2="49.3"/>
      <line class="diamondst1" x1="99.4" y1="52.3" x2="-17.1" y2="52.3"/>
      <line class="diamondst1" x1="104.2" y1="55.2" x2="-12.3" y2="55.2"/>
      <line class="diamondst1" x1="102.3" y1="58.2" x2="-14.2" y2="58.2"/>
      <line class="diamondst1" x1="107.1" y1="61.2" x2="-9.4" y2="61.2"/>
      <line class="diamondst1" x1="88.5" y1="64.2" x2="-28" y2="64.2"/>
      <line class="diamondst1" x1="93.3" y1="67.1" x2="-23.2" y2="67.1"/>
      <line class="diamondst1" x1="91.4" y1="70.1" x2="-25.1" y2="70.1"/>
      <line class="diamondst1" x1="96.2" y1="73.1" x2="-20.3" y2="73.1"/>
      <line class="diamondst1" x1="90.3" y1="76.1" x2="-26.3" y2="76.1"/>
      <line class="diamondst1" x1="95.1" y1="79.1" x2="-21.4" y2="79.1"/>
      <line class="diamondst1" x1="93.1" y1="82" x2="-23.4" y2="82"/>
      <line class="diamondst1" x1="97.9" y1="85" x2="-18.6" y2="85"/>
      <line class="diamondst1" x1="90.6" y1="88" x2="-25.9" y2="88"/>
      <line class="diamondst1" x1="95.4" y1="91" x2="-21.1" y2="91"/>
      <line class="diamondst1" x1="93.5" y1="94" x2="-23" y2="94"/>
      <line class="diamondst1" x1="98.3" y1="96.9" x2="-18.2" y2="96.9"/>
      <line class="diamondst1" x1="92.4" y1="99.9" x2="-24.2" y2="99.9"/>
      <line class="diamondst1" x1="97.2" y1="102.9" x2="-19.4" y2="102.9"/>
      <line class="diamondst1" x1="95.2" y1="105.9" x2="-21.3" y2="105.9"/>
      <line class="diamondst1" x1="100" y1="108.9" x2="-16.5" y2="108.9"/>
      <line class="diamondst1" x1="90.5" y1="-4.4" x2="-26" y2="-4.4"/>
      <line class="diamondst1" x1="87.5" y1="-1.4" x2="-29" y2="-1.4"/>
      <line class="diamondst1" x1="92.4" y1="1.6" x2="-24.2" y2="1.6"/>
      <line class="diamondst1" x1="90.4" y1="4.6" x2="-26.1" y2="4.6"/>
      <line class="diamondst1" x1="98.6" y1="13.5" x2="-17.9" y2="13.5"/>
      <line class="diamondst1" x1="95.2" y1="7.6" x2="-21.3" y2="7.6"/>
      <line class="diamondst1" x1="89.3" y1="10.5" x2="-27.2" y2="10.5"/>
  `;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 62.8 112.7"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Oval = () => {
  const html = `
    <style type="text/css">
    </style>
    <g id="Layer_2">
    </g>
    <path class="st0" d="M56.5,26.6v59.5C56.5,99,46,109.6,33,109.6h-4C16.1,109.6,5.5,99,5.5,86.1V26.6C5.5,13.7,16.1,3.1,29,3.1h4
      C46,3.1,56.5,13.7,56.5,26.6z"/>
  `;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 62.8 112.7"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
const OvalHashed = () => {
  const html = `
    <style type="text/css">
      .ovalst1{clip-path:url(#oval_2_);fill:#EE4823;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
    </style>
    <g id="Layer_2">
    </g>
    <path class="st0" d="M56.5,26.6v59.5C56.5,99,46,109.6,33,109.6h-4C16.1,109.6,5.5,99,5.5,86.1V26.6C5.5,13.7,16.1,3.1,29,3.1h4
      C46,3.1,56.5,13.7,56.5,26.6z"/>
    <g>
      <defs>
        <path id="oval_1_" d="M56.5,26.6v59.5C56.5,99,46,109.6,33,109.6h-4C16.1,109.6,5.5,99,5.5,86.1V26.6C5.5,13.7,16.1,3.1,29,3.1h4
          C46,3.1,56.5,13.7,56.5,26.6z"/>
      </defs>
      <clipPath id="oval_2_">
        <use xlink:href="#oval_1_"  style="overflow:visible;"/>
      </clipPath>
      <line class="ovalst1" x1="98.6" y1="13.7" x2="-17.9" y2="13.7"/>
      <line class="ovalst1" x1="95.6" y1="16.7" x2="-20.9" y2="16.7"/>
      <line class="ovalst1" x1="100.4" y1="19.6" x2="-16.1" y2="19.6"/>
      <line class="ovalst1" x1="98.4" y1="22.6" x2="-18.1" y2="22.6"/>
      <line class="ovalst1" x1="103.3" y1="25.6" x2="-13.3" y2="25.6"/>
      <line class="ovalst1" x1="97.3" y1="28.6" x2="-19.2" y2="28.6"/>
      <line class="ovalst1" x1="102.1" y1="31.6" x2="-14.4" y2="31.6"/>
      <line class="ovalst1" x1="100.2" y1="34.5" x2="-16.3" y2="34.5"/>
      <line class="ovalst1" x1="105" y1="37.5" x2="-11.5" y2="37.5"/>
      <line class="ovalst1" x1="97.7" y1="40.5" x2="-18.9" y2="40.5"/>
      <line class="ovalst1" x1="102.5" y1="43.5" x2="-14" y2="43.5"/>
      <line class="ovalst1" x1="100.5" y1="46.5" x2="-16" y2="46.5"/>
      <line class="ovalst1" x1="105.4" y1="49.4" x2="-11.2" y2="49.4"/>
      <line class="ovalst1" x1="99.4" y1="52.4" x2="-17.1" y2="52.4"/>
      <line class="ovalst1" x1="104.2" y1="55.4" x2="-12.3" y2="55.4"/>
      <line class="ovalst1" x1="102.3" y1="58.4" x2="-14.2" y2="58.4"/>
      <line class="ovalst1" x1="107.1" y1="61.4" x2="-9.4" y2="61.4"/>
      <line class="ovalst1" x1="88.5" y1="64.3" x2="-28" y2="64.3"/>
      <line class="ovalst1" x1="93.3" y1="67.3" x2="-23.2" y2="67.3"/>
      <line class="ovalst1" x1="91.4" y1="70.3" x2="-25.1" y2="70.3"/>
      <line class="ovalst1" x1="96.2" y1="73.3" x2="-20.3" y2="73.3"/>
      <line class="ovalst1" x1="90.3" y1="76.3" x2="-26.3" y2="76.3"/>
      <line class="ovalst1" x1="95.1" y1="79.2" x2="-21.4" y2="79.2"/>
      <line class="ovalst1" x1="93.1" y1="82.2" x2="-23.4" y2="82.2"/>
      <line class="ovalst1" x1="97.9" y1="85.2" x2="-18.6" y2="85.2"/>
      <line class="ovalst1" x1="90.6" y1="88.2" x2="-25.9" y2="88.2"/>
      <line class="ovalst1" x1="95.4" y1="91.1" x2="-21.1" y2="91.1"/>
      <line class="ovalst1" x1="93.5" y1="94.1" x2="-23" y2="94.1"/>
      <line class="ovalst1" x1="98.3" y1="97.1" x2="-18.2" y2="97.1"/>
      <line class="ovalst1" x1="92.4" y1="100.1" x2="-24.2" y2="100.1"/>
      <line class="ovalst1" x1="97.2" y1="103.1" x2="-19.4" y2="103.1"/>
      <line class="ovalst1" x1="95.2" y1="106" x2="-21.3" y2="106"/>
      <line class="ovalst1" x1="100" y1="109" x2="-16.5" y2="109"/>
      <line class="ovalst1" x1="90.5" y1="-4.2" x2="-26" y2="-4.2"/>
      <line class="ovalst1" x1="87.5" y1="-1.2" x2="-29" y2="-1.2"/>
      <line class="ovalst1" x1="92.4" y1="1.8" x2="-24.2" y2="1.8"/>
      <line class="ovalst1" x1="90.4" y1="4.8" x2="-26.1" y2="4.8"/>
      <line class="ovalst1" x1="95.2" y1="7.7" x2="-21.3" y2="7.7"/>
      <line class="ovalst1" x1="89.3" y1="10.7" x2="-27.2" y2="10.7"/>
    </g>
  `;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 62.8 112.7"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Squiggle = () => {
  const html = `
    <style type="text/css">
    </style>
    <g id="Layer_2">
    </g>
    <path class="st0" d="M56.5,98.9c-0.2,2.6-2.2,7.7-14.9,7.6c-7.9-0.1-29.8-3.5-31.4-33.4c-0.2-4.5,1.9-11.1,3.8-17.3
      c1.4-3.8,2.6-7.5,3-10.9c0.2-1.3,0.2-2.6,0-3.9c-1.4-9.3-8.9-22.6-10.9-26c-0.4-0.7-0.6-1.5-0.6-2.3C5.8,10.2,7.7,5,20.5,5.2
      c7.9,0.1,29.8,3.5,31.4,33.4c0.2,4.5-1.9,11.1-3.8,17.3c-1.4,3.8-2.5,7.5-3,10.9c-0.2,1.3-0.2,2.6,0,3.9c1.4,9.3,8.9,22.6,10.9,26
      C56.3,97.3,56.6,98.1,56.5,98.9z"/>
  `;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 62.8 112.7"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const SquiggleHashed = () => {
  const html = `
    <style type="text/css">
      .squigst1{clip-path:url(#squig_2_);fill:#EE4823;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
    </style>
    <g id="Layer_2">
    </g>
    <path class="st0" d="M56.5,98.9c-0.2,2.6-2.2,7.7-14.9,7.6c-7.9-0.1-29.8-3.5-31.4-33.4c-0.2-4.5,1.9-11.1,3.8-17.3
      c1.4-3.8,2.6-7.5,3-10.9c0.2-1.3,0.2-2.6,0-3.9c-1.4-9.3-8.9-22.6-10.9-26c-0.4-0.7-0.6-1.5-0.6-2.3C5.8,10.2,7.7,5,20.5,5.2
      c7.9,0.1,29.8,3.5,31.4,33.4c0.2,4.5-1.9,11.1-3.8,17.3c-1.4,3.8-2.5,7.5-3,10.9c-0.2,1.3-0.2,2.6,0,3.9c1.4,9.3,8.9,22.6,10.9,26
      C56.3,97.3,56.6,98.1,56.5,98.9z"/>
    <g>
      <defs>
        <path id="squig_1_" d="M56.5,99.4c-0.2,2.6-2.2,7.7-14.9,7.6c-7.9-0.1-29.8-3.5-31.4-33.4C9.9,69,12.1,62.4,14,56.3
          c1.4-3.8,2.6-7.5,3-10.9c0.2-1.3,0.2-2.6,0-3.9c-1.4-9.3-8.9-22.6-10.9-26c-0.4-0.7-0.6-1.5-0.6-2.3c0.2-2.6,2.2-7.8,14.9-7.6
          c7.9,0.1,29.8,3.5,31.4,33.4c0.2,4.5-1.9,11.1-3.8,17.3c-1.4,3.8-2.5,7.5-3,10.9c-0.2,1.3-0.2,2.6,0,3.9c1.4,9.3,8.9,22.6,10.9,26
          C56.3,97.8,56.6,98.6,56.5,99.4z"/>
      </defs>
      <clipPath id="squig_2_">
        <use xlink:href="#squig_1_"  style="overflow:visible;"/>
      </clipPath>
      <line class="squigst1" x1="98.6" y1="13.7" x2="-17.9" y2="13.7"/>
      <line class="squigst1" x1="95.6" y1="16.7" x2="-20.9" y2="16.7"/>
      <line class="squigst1" x1="100.4" y1="19.6" x2="-16.1" y2="19.6"/>
      <line class="squigst1" x1="98.4" y1="22.6" x2="-18.1" y2="22.6"/>
      <line class="squigst1" x1="103.3" y1="25.6" x2="-13.3" y2="25.6"/>
      <line class="squigst1" x1="97.3" y1="28.6" x2="-19.2" y2="28.6"/>
      <line class="squigst1" x1="102.1" y1="31.6" x2="-14.4" y2="31.6"/>
      <line class="squigst1" x1="100.2" y1="34.5" x2="-16.3" y2="34.5"/>
      <line class="squigst1" x1="105" y1="37.5" x2="-11.5" y2="37.5"/>
      <line class="squigst1" x1="97.7" y1="40.5" x2="-18.9" y2="40.5"/>
      <line class="squigst1" x1="102.5" y1="43.5" x2="-14" y2="43.5"/>
      <line class="squigst1" x1="100.5" y1="46.5" x2="-16" y2="46.5"/>
      <line class="squigst1" x1="105.4" y1="49.4" x2="-11.2" y2="49.4"/>
      <line class="squigst1" x1="99.4" y1="52.4" x2="-17.1" y2="52.4"/>
      <line class="squigst1" x1="104.2" y1="55.4" x2="-12.3" y2="55.4"/>
      <line class="squigst1" x1="102.3" y1="58.4" x2="-14.2" y2="58.4"/>
      <line class="squigst1" x1="107.1" y1="61.4" x2="-9.4" y2="61.4"/>
      <line class="squigst1" x1="88.5" y1="64.3" x2="-28" y2="64.3"/>
      <line class="squigst1" x1="93.3" y1="67.3" x2="-23.2" y2="67.3"/>
      <line class="squigst1" x1="91.4" y1="70.3" x2="-25.1" y2="70.3"/>
      <line class="squigst1" x1="96.2" y1="73.3" x2="-20.3" y2="73.3"/>
      <line class="squigst1" x1="90.3" y1="76.3" x2="-26.3" y2="76.3"/>
      <line class="squigst1" x1="95.1" y1="79.2" x2="-21.4" y2="79.2"/>
      <line class="squigst1" x1="93.1" y1="82.2" x2="-23.4" y2="82.2"/>
      <line class="squigst1" x1="97.9" y1="85.2" x2="-18.6" y2="85.2"/>
      <line class="squigst1" x1="90.6" y1="88.2" x2="-25.9" y2="88.2"/>
      <line class="squigst1" x1="95.4" y1="91.1" x2="-21.1" y2="91.1"/>
      <line class="squigst1" x1="93.5" y1="94.1" x2="-23" y2="94.1"/>
      <line class="squigst1" x1="98.3" y1="97.1" x2="-18.2" y2="97.1"/>
      <line class="squigst1" x1="92.4" y1="100.1" x2="-24.2" y2="100.1"/>
      <line class="squigst1" x1="97.2" y1="103.1" x2="-19.4" y2="103.1"/>
      <line class="squigst1" x1="95.2" y1="106" x2="-21.3" y2="106"/>
      <line class="squigst1" x1="100" y1="109" x2="-16.5" y2="109"/>
      <line class="squigst1" x1="90.5" y1="-4.2" x2="-26" y2="-4.2"/>
      <line class="squigst1" x1="87.5" y1="-1.2" x2="-29" y2="-1.2"/>
      <line class="squigst1" x1="92.4" y1="1.8" x2="-24.2" y2="1.8"/>
      <line class="squigst1" x1="90.4" y1="4.8" x2="-26.1" y2="4.8"/>
      <line class="squigst1" x1="95.2" y1="7.7" x2="-21.3" y2="7.7"/>
      <line class="squigst1" x1="89.3" y1="10.7" x2="-27.2" y2="10.7"/>
    </g>
    </svg>
  `;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 62.8 112.7"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Card = props => {
  let Shape;
  if (props.shape === 'diamond') {
    Shape = props.pattern === 'hashed' ? DiamondHashed : Diamond;
  } else if (props.shape === 'oval') {
    Shape = props.pattern === 'hashed' ? OvalHashed : Oval;
  } else if (props.shape === 'squiggle') {
    Shape = props.pattern === 'hashed' ? SquiggleHashed : Squiggle;
  }

  const cardClass = () => {
    let base = `card card--${props.color}`;
    if (props.pattern === 'filled') {
      base += ' card--filled';
    }
    if (props.number === 3) {
      base += ' three';
    }
    if (props.number === 2) {
      base += ' two';
    }
    if (props.selected) {
      base += ' card--selected';
    }

    return base;
  };

  let shapes = [];
  for (let i = 0; i < props.number; i++) {
    shapes.push(
      <div className="card-babysitter" key={i}>
        <Shape />
      </div>
    );
  }

  return (
    <div className={cardClass()} onClick={props.handleClick}>
      <div className="card_shape-container">{shapes}</div>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Card;
