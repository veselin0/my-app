import React from "react";
import ReactDOM from "react-dom";

const MyApp = () => {
    return (
    <div>
        <ul>
            <li>Guchi</li>
            <li>Bochi</li>
            <li>Mochi</li>
        </ul>
    </div>
    );
};

ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
);