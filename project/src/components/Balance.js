import React from "react";
import LogoIcon from "./LogoIcon";

const Balance = ({ balance }) => {
    return (
        <div className="balance">
            <div>
                <h3>My balance</h3>
                <h2>${balance}</h2>
            </div>
            <LogoIcon />
        </div>
    );
};

export default Balance;
