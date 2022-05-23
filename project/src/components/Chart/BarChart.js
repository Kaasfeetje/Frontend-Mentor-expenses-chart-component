import React from "react";

const BarChart = ({ expense, percentage, selected, setSelectedBar }) => {
    return (
        <div
            className={`barchart ${selected ? "selected" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                setSelectedBar(selected);
            }}
        >
            <div className="amount">${expense.amount}</div>
            <div className="bar" style={{ height: percentage * 200 }}></div>
            <div className="day">{expense.day}</div>
        </div>
    );
};

export default BarChart;
