import { useState, useRef } from "react";

const boxArray: Boolean[] = [];
for (let i = 0; i < 7; i++) {
  boxArray.push(true);
}

function Test() {
  const [boxes, setBoxes] = useState<Boolean[]>(boxArray);
  const [seq, setSeq] = useState<Number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (idx: Number) => {
    const newBoxArray = [...boxes];
    // @ts-ignore
    newBoxArray[idx] = false;
    const newSeq = [idx,...seq];
    setSeq(newSeq);
    setBoxes(newBoxArray);
    if (newBoxArray.indexOf(true) === -1) {
      rollBack(newSeq);
    }
  };

  const rollBack = (rollBackSeq: Number[]) => {
    intervalRef.current = setInterval(() => {
        const main = rollBackSeq.pop()
        if (main === undefined && intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
            return;
        }
      setBoxes((newBoxes) => {
        console.log('ok', main)
        const newBox = [...newBoxes]
        // @ts-ignore
        newBox[main] = true
        return newBox;
      } );
    }, 100);
  };
  return (
    <div>
      {boxes.map((v, idx) => (
        <div
          key={idx}
          className="m-5 h-20"
          onClick={() => handleClick(idx)}
          style={{
            background: v ? "red" : "green",
          }}
        >
          {idx}
        </div>
      ))}
    </div>
  );
}

export default Test;
