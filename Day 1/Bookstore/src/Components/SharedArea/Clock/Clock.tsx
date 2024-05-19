import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("");

    useEffect(()=>{

        const timerId = setInterval(()=>{
            const now = new Date();
            setTime(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        }, 1000);

        // Following function will be done when component destroyed or when useEffect reinvoked:
        return () => {
            // ... closing the timer...
            clearInterval(timerId);
        };
    
    }, []);

    return (
        <div className="Clock">
			Time: {time}
        </div>
    );
}
