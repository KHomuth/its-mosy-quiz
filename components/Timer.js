import * as React from "react";
import { Text } from "react-native";
import styles from "../assets/styles/Styles";
import getTdData from "../functions/_getTdData";
import * as RootNavigation from "./RootNavigation";

export default function Timer ( props ) {
    const millisToMinutesAndSeconds = (millis) => {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return (
            seconds == 60 ?
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
        );
      }

    const calculateTimeLeft = (timeToEnd) => {
        let difference = Math.floor((timeToEnd + 1000)/1000)*1000;
        
        return difference;
    };

    const [count, setCount] = React.useState(calculateTimeLeft(props.timeLeft));

    React.useEffect(() => {
        if (!count) {
            if (props.qPhase == 2 && props.qIndex == 5) {
                RootNavigation.navigate('Score');
            }
            getTdData(props.selectedAnswer);
            return;
        }
        const interval = setInterval(() => {
            setCount(count - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <Text style={styles.text}>{millisToMinutesAndSeconds(count)}</Text>
    );
};