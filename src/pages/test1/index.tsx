import React, { useState, useEffect } from 'react';
import { useWatch } from '@/utils/hook';

export default () => {
  const [count, setCount] = useState(0);
  const stop = useWatch<number>(count, old => {
    console.log('newValue: ', count);
    console.log('oldValue: ', old);
  });

  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      (function(i) {
        setTimeout(() => {
          setCount(i);
          if (i === 10) stop();
        }, i * 1000);
      })(i);
    }
  }, []);

  return <div>useWatch测试</div>;
};
