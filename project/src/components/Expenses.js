import React from "react";

const Expenses = ({ totalExpenses, percentage }) => {
    return (
        <div className="expenses">
            <div>
                <h3>Total this month</h3>
                <h2>${totalExpenses}</h2>
            </div>
            <div className="percentage">
                <h4>{percentage}%</h4>
                <h3>from last month</h3>
            </div>
        </div>
    );
};

export default Expenses;
