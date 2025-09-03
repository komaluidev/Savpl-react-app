import React from 'react';
import yourLogo from "../assets/soilinto3.png";

import { IntroStepper } from "../components/IntroStepper";

const Into3 = () => {2

 
  return (
     <IntroStepper
                 title={"Where agriculture meets execellence"}
                 description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                         corporis fuga, mollitia cum ea expedita nesciunt quis nemo
                         dignissimos iure aut! Officiis libero aut sed veniam eveniet, ab
                         culpa eum!`}
                 prevHref={"/"}
                 nextHref={"/walcomepage"}
                 yourLogo={yourLogo}
               />
  );
};

export default Into3;