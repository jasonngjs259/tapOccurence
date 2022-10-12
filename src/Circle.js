import { useEffect, useState } from "react";
import { CONSTANT_VALUE } from "./constant";

const Circle = ({
    element,
    getOccurence,
    setOccurence,
    completedArray,
    setCompletedArray,
    setTapArray,
    setVisited,
}) => {
    const [circleData, setCircleData] = useState(element);

    useEffect(() => {
        if (circleData.id === getOccurence) {
            setCircleData((prev) => ({
                ...prev,
                isPlayAnimation: true,
            }));

            setTimeout(() => {
                setCircleData((prev) => ({
                    ...prev,
                    isShowMissText: true,
                    isPlayAnimation: false,
                }));
            }, CONSTANT_VALUE.tapAnimationDuration * 1000);
        }

        setTimeout(() => {
            if (getOccurence < CONSTANT_VALUE.occurence) {
                setOccurence(getOccurence + 1);
            }
        }, (CONSTANT_VALUE.occurenceDuration * 1000) / CONSTANT_VALUE.occurence);
    }, [getOccurence, circleData.id, setOccurence]);

    // useEffect(() => {
    //     if (circleData.id === getOccurence) {
    //         setTimeout(() => {
    //             setCircleData((prev) => ({
    //                 ...prev,
    //                 isShowMissText: true,
    //                 isPlayAnimation: false,
    //             }));
    //         }, CONSTANT_VALUE.tapAnimationDuration * 1000);
    //     }
    // }, [circleData.isPlayAnimation]);

    useEffect(() => {
        const tempArray = [...completedArray];
        tempArray.push("Completed");

        setTimeout(() => {
            setCircleData((prev) => ({
                ...prev,
                isShowMissText: false,
            }));
            setCompletedArray(tempArray);
        }, 1000);

        // setTimeout(() => {
        //     setCompletedArray(tempArray);
        // }, 1000);
    }, [circleData.isShowMissText, completedArray]);

    // console.log(completedArray);

    // useEffect(() => {
    //     if (
    //         circleData.id === CONSTANT_VALUE.occurence - 1 &&
    //         circleData.isCompleted
    //     ) {
    //
    //         setIsCompleted(true);
    //     }
    // }, [circleData.id, circleData.isCompleted, setIsCompleted]);

    // useEffect(() => {
    //     setInterval(() => {
    //         setIsShowMissText(false);
    //         // if (getOccurence === CONSTANT_VALUE.occurence) {
    //         //     setTapArray([]);
    //         // }
    //         // setTapArray([]);
    //     }, 1000 * (index + 1));
    // }, [isShowMissText]);

    // console.log(getOccurence);
    // console.log(isShowCircle);

    const handleClick = () => {
        setCircleData((prev) => ({ ...prev, targetHitText: "Perfect" }));
    };

    console.log(getOccurence);

    return (
        <>
            {circleData.isPlayAnimation && (
                <div
                    className="circle"
                    style={{
                        top: circleData.position.top,
                        left: circleData.position.left,
                        animation: `${circleData.isPlayAnimation && "shrink"} ${
                            CONSTANT_VALUE.tapAnimationDuration
                        }s linear`,
                    }}
                    onClick={handleClick}
                />
            )}
            {circleData.isShowMissText && (
                <div className="miss" style={circleData.position}>
                    Miss
                </div>
            )}
        </>
    );
};

export default Circle;
