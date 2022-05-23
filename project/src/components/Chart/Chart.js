import React, { useState } from "react";
import BarChart from "./BarChart";
import "./Chart.css";

const Chart = ({ expenses }) => {
    const [selectedBar, setSelectedBar] = useState(null);
    const maxAmount = Math.max(...expenses.map((expense) => expense.amount));

    return (
        <div className="chart" onClick={() => setSelectedBar(null)}>
            {expenses.map((expense, index) => {
                return (
                    <BarChart
                        selected={selectedBar === index}
                        setSelectedBar={(selected) =>
                            selected
                                ? setSelectedBar(null)
                                : setSelectedBar(index)
                        }
                        expense={expense}
                        percentage={expense.amount / maxAmount}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
