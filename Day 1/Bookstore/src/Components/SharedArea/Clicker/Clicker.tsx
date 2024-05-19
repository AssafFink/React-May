import "./Clicker.css";
import imageSource from "../../../Assets/Images/clicker.jpg";
import { useState } from "react";

export function Clicker(): JSX.Element {

    const [counter, setCounter] = useState<number>(0); // 0 --> Initial value

    function clickMe() {
        setCounter(counter + 1);
    }
        
    return (
        <div className="Clicker">
			<img src={imageSource} onClick={clickMe} />
            <span>Number of Clicks: {counter}</span>
        </div>
    );
}
