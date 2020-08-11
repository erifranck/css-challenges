import { useState } from 'react';
function counter(delay: number = 15) {
      return new Date().getTime() + (delay * 60 * 1000 );
}

function countFormatter(distance: number) {
      const minutes = Math.floor(distance % (1000 * 60 * 60) / ( 1000 * 60 ));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);
      const milliseconds = distance % 1000;
      return `${minutes}:${seconds}:${milliseconds}`;
}

export interface CounterFunction {
      stopCounter: () => void
};
export const useCounter = (): [string, (delay?: number) => CounterFunction] => {
      const [state, setstate] = useState('00:00:000')
      return [
            state,
            (delay = 15) => {
                  const countDown = counter(delay);
                  const interval = setInterval(() => {
                        const distance = countDown - new Date().getTime();
                        setstate(countFormatter(distance))
                        if(distance === 0) {
                              clearInterval(interval);
                        }
                  })
                  return {
                        stopCounter: () => {
                              clearInterval(interval)
                        }
                  }
            }
      ]      
}