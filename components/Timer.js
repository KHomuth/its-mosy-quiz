import * as React from "react";
import { StyleSheet, Text } from "react-native";
import getTdData from "../functions/_getTdData";

export default function Timer ( props ) {
    const calculateTimeLeft = (startTime, timerInterval) => {
        let date = new Date;
        let currentTime = date.getTime();
        let difference = timerInterval - (currentTime - startTime);
        let timerTime = Math.floor((difference / 1000) % 60) - 1;

        console.log(difference);
      
        return timerTime;
    };

    const [count, setCount] = React.useState(calculateTimeLeft(props.timeCreated, props.timeLeft));

    React.useEffect(() => {
        if (!count) {
            getTdData();
            console.log('switch phase');
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