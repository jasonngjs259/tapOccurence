import { useEffect, useState } from "react";
import "./App.css";
import Circle from "./Circle";
import { CIRCLE_DATA, CONSTANT_VALUE, TAP_LOCATION_ARRAY } from "./constant";
import generateNode from "./Utils";

const App = () => {
    const [getOccurence, setOccurence] = useState(0);
    const [tapArray, setTapArray] = useState([]);
    const [visited, setVisited] = useState(generateNode());
    const [completedArray, setCompletedArray] = useState([]);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (
            getOccurence === CONSTANT_VALUE.occurence &&
            completedArray.length === CONSTANT_VALUE.occurence
        ) {
            setOccurence(0);
            setTapArray([]);
            setVisited(generateNode());
            setCompletedArray([]);
        }
    }, [getOccurence, completedArray]);

    // console.log(visited);

    useEffect(() => {
        const tempArray = [];

        for (let i = 0; i < visited.length; i++) {
            tempArray.push({
                ...CIRCLE_DATA,
                id: i,
                position: TAP_LOCATION_ARRAY[visited[i]],
            });
        }

        setTapArray(tempArray);
    }, [visited]);

    // console.log(tapArray);
    // console.log(visited);

    const handlePause = () => {
        if (isPaused) {
            setIsPaused(false);
        } else {
            setIsPaused(true);
        }
    };

    return (
        <>
            <button onClick={handlePause}>{isPaused ? "Play" : "Pause"}</button>
            {tapArray.map((element, i) => (
                <Circle
                    element={element}
                    key={`circle${i}`}
                    getOccurence={getOccurence}
                    setOccurence={setOccurence}
                    completedArray={completedArray}
                    setCompletedArray={setCompletedArray}
                    setTapArray={setTapArray}
                    setVisited={setVisited}
                />
            ))}
        </>
    );
};

export default App;
