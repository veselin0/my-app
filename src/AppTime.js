import React from "react";

const AppTime = () => {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "";

    const styles = {
        fontSize: 200,
    };

    if (hours < 12 ) {
        timeOfDay = "morning";
        styles.color = "green";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color = "yellow";
    } else {
        timeOfDay = "night";
        styles.color = "blue";
    }

    
    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    );
};

export default AppTime;