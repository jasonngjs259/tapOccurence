import { useEffect, useState } from "react";
import { CONSTANT_VALUE } from "./constant";
import generateNode from "./Utils";

const Circle = ({
    element,
    getOccurence,
    setOccurence,
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
        }

        setTimeout(() => {
            setOccurence(getOccurence + 1);
        }, (CONSTANT_VALUE.occurenceDuration * 1000) / CONSTANT_VALUE.occurence);

        if (circleData.id === getOccurence) {
            setTimeout(() => {
                setCircleData((prev) => ({
                    ...prev,
                    isShowMissText: true,
                    isPlayAnimation: false,
                }));
            }, CONSTANT_VALUE.tapAnimationDuration * 1000);
        }
    }, [getOccurence, circleData.id, setOccurence]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCircleData((prev) => ({
    //             ...prev,
    //             isShowMissText: false,
    //         }));
    //     });
    // }, [circleData.isShowMissText]);

    useEffect(() => {
        if (
            getOccurence === CONSTANT_VALUE.occurence &&
            circleData.isCompleted
        ) {
            setOccurence(0);
            setTapArray([]);
            setVisited(generateNode());
        }
    }, [
        getOccurence,
        circleData.isCompleted,
        setOccurence,
        setVisited,
        setTapArray,
    ]);

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
        setOccurence((prev) => prev + 1);
    };

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
