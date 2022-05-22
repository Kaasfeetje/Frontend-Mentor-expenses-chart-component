import React from "react";

const Balance = ({ balance }) => {
    return (
        <div>
            <div>
                <h3>My balance</h3>
                <h2>${balance}</h2>
            </div>
        </div>
    );
};

export default Balance;
