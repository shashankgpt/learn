/**You have a countdown timer that starts from an initial value and counts down to zero. When it reaches zero, it restarts from the initial value. Users can dynamically change the initial countdown value using an input field. The countdown should adapt to the new initial value immediately after the current countdown reaches zero. */

import { useState, useEffect, useRef } from "react";

const initialInterval = 10;

function Test() {
  const [timer, setTimer] = useState(initialInterval);
  const [val, setVal] = useState(initialInterval);
  const newRef = useRef(null);
  const startTimer = () => {
    if (newRef.current) {
      clearInterval(newRef.current);
    }
    // @ts-ignore
    newRef.current = setInterval(() => {
      setTimer((t) => {
        if (t > 0) {
          return --t;
        }
        return val;
      });
    }, 1000);
  };
  useEffect(() => {
    startTimer();
  }, [val]);
  return (
    <div>
      <div>{timer}</div>
      <div>
        <input
          placeholder="nu"
          value={val}
          onChange={(e) =>
            // @ts-ignore
            setVal(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
}

export default Test;
