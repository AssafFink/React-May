import { useState } from "react";
import "./CurrentDate.css";

export function CurrentDate(): JSX.Element {

    // const arr = useState<string>();
    // const currDate = arr[0];
    // const setCurrDate = arr[1];

    // Destructuring Assignment
    const [currDate, setCurrDate] = useState<string>();

    function display() {
        const now = new Date();
        setCurrDate(now.toLocaleDateString());
    }

    return (
        <div className="CurrentDate">
			<button onClick={display}>Show Current Date</button>
            <span>Current Date: {currDate}</span>
        </div>
    );
}
