import { useEffect, useState } from "react";
import "./App.css";
import Circle from "./Circle";
import { CIRCLE_DATA, TAP_LOCATION_ARRAY } from "./constant";
import generateNode from "./Utils";

const App = () => {
    const [getOccurence, setOccurence] = useState(0);
    const [tapArray, setTapArray] = useState([]);
    const [visited, setVisited] = useState(generateNode());

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

    return (
        <>
            {tapArray.map((element, i) => (
                <Circle
                    element={element}
                    key={`circle${i}`}
                    getOccurence={getOccurence}
                    setOccurence={setOccurence}
                    setTapArray={setTapArray}
                    setVisited={setVisited}
                />
            ))}
        </>
    );
};

export default App;
