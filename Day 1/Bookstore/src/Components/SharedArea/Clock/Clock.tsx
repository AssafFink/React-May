import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("");

    useEffect(()=>{

        setInterval(()=>{
            const now = new Date();
            setTime(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        }, 1000);
    
    }, []);


    return (
        <div className="Clock">
			Time: {time}
        </div>
    );
}
