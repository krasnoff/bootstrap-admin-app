import React from "react";
import { useEffect, useLayoutEffect, useState } from "react";

function LifeCicle() {
    const [time] = useState<string>(Date.now().toString())
    const ref = React.useRef<string>()

    useEffect(() => {
        ref.current = 'some value'
        console.log('start...', ref.current);

        // Specify how to clean up after this effect:
        return function cleanup() {
            console.log('end...');
        };
    }, []);

    useLayoutEffect(() => {
        console.log('start layout...', ref.current);

        // Specify how to clean up after this effect:
        return function cleanup() {
            console.log('end layout...');
        };
    }, []);

    return (
      <div>
        life cycle...<br />
        {time}<br />
        article about useEffect and useLayoutEffect: <a href="https://kentcdodds.com/blog/useeffect-vs-uselayouteffect" rel="noreferrer" target="_blank">https://kentcdodds.com/blog/useeffect-vs-uselayouteffect</a>
      </div>
    );
  }
  
export default LifeCicle;