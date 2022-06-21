import * as React from "react";
import { StyleSheet, Text } from "react-native";
import getTdData from "../functions/_getTdData";

export default function Timer ( props ) {
    const calculateSec = (timeInMs) => {
        return Math.floor((timeInMs / 1000) % 60);
    } 
    
    const calculateTimeLeft = (startTime, timerInterval) => {
        let date = new Date;
        let currentTime = date.getTime();
        let difference = calculateSec(timerInterval) - (calculateSec(currentTime) - calculateSec(startTime));

        console.log(difference);
        return difference;
    };

    const [count, setCount] = React.useState(calculateTimeLeft(props.timeCreated, props.timeLeft));

    React.useEffect(() => {
        if (!count) {
            getTdData(props.selectedAnswer);
            return;
        }
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <Text>{count}</Text>
    );
};