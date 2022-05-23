import React from "react";
import Balance from "./components/Balance";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses";
import expenses from "./data.json";

const App = () => {
    return (
        <div className="home">
            <div className="container">
                <Balance balance={921.48} />
                <div className="spendings">
                    <h1>Spending - Last 7 days</h1>
                    <Chart expenses={expenses} />
                    <Expenses totalExpenses={478.33} percentage={`+${2.4}`} />
                </div>
            </div>
            <div class="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt/hub/expenses-chart-component-LxqClcwSj5"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                .<br /> Coded by{" "}
                <a
                    href="https://github.com/Kaasfeetje"
                    target="_blank"
                    rel="noreferrer"
                >
                    Kaasfeetje
                </a>
                .
            </div>
        </div>
    );
};

export default App;
