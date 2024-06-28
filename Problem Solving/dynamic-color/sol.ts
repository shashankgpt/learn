import { useState } from "react"

const initialBoxes = new Map();
for (let i =0; i< 7; i++) {
    initialBoxes.set(i, {
        color: 'red',
        disabled: false,
    })
}
function Test() {
    const [boxes, setBoxes] = useState<any>(initialBoxes);
    const [seq, setSeq] = useState<Number[]>([])

    const rollBack = (seqs: Number[]) => {
        for (let i =0; i<seqs.length; i++) {
            setTimeout(() => {
                console.log(seqs[i]);
                setBoxes((prevBoxes: any) => {
                    const updatedMap = new Map(prevBoxes);
                    updatedMap.set(seqs[i], {
                      color: 'red',
                      disabled: false,
                    });
                    return updatedMap;
                  });
            }, 100 * (i + 1))
        }
    }

    const handleColorChange = (id: Number) => {
        const newMap = new Map(boxes)
        if (boxes.get(id).disabled) {
            return;
        }
        newMap.set(id, {
            color: 'green',
            disabled: true
        })
        const newSeq = [...seq, id]
        setSeq(newSeq);
        setBoxes(newMap)
       if (newMap.size <= newSeq.length) {
        rollBack(newSeq)
        return;
            newSeq.forEach((v) => 
            setTimeout(() => {
            setBoxes((prevBoxes: any) => {
                const updatedMap = new Map(prevBoxes);
                updatedMap.set(v, {
                  color: 'red',
                  disabled: false,
                });
                return updatedMap;
              });

              /* const updatedMap = new Map(boxes);
              updatedMap.set(v, {
                color: 'red',
                disabled: false,
              });
              setBoxes(updatedMap);*/

            }, 1000 * (Number(v) + 1))
            );
       }
    }
    const createBoxes = () => {
        const ele = [];
        for (const [key, value] of boxes) {
           ele.push(<div className="m-5"
           onClick={() => handleColorChange(key)}
           key={value.key}
           style={{
            background: value.color
           }}>{key}</div>) 
        }

        return ele.map((val) => val);
    }
    return <div>
        {createBoxes()}
    </div>
}

export default Test