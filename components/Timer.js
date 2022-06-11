import * as React from "react";
import { StyleSheet, Text } from "react-native";

export default function Timer ( props ) {
    const [count, setCount] = React.useState(10);

    React.useEffect(() => {
        if (!count) return;
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <Text>{count}</Text>
    );
};