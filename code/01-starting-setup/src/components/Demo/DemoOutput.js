import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('Demo Output running');
    return <MyParagraph>{props.show ? 'This is new! - from Demo' : ''} </MyParagraph>
};

//export default DemoOutput;
// to skip unnecessary rerendering of (functiona) child component, 
// use React.memo - it then compares props instead of reevaluating the components. (tradeoff)
// only if the value of the props change the components be reevaluated. 
// But if the props are changing anyway, it does not make sense to use React.memo!

 export default React.memo(DemoOutput);
