import { CONSTANT_VALUE, TAP_LOCATION_ARRAY } from "./constant";

const generateNode = () => {
    const visitedNode = [];

    while (visitedNode.length !== CONSTANT_VALUE.occurence) {
        let tempNum = Math.floor(Math.random() * TAP_LOCATION_ARRAY.length);
        if (!visitedNode.includes(tempNum)) {
            visitedNode.push(tempNum);
        }
    }

    return visitedNode;
};

export default generateNode;
