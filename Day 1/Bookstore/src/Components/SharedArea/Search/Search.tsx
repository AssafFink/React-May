import { ChangeEvent, useState } from "react";
import "./Search.css";

export function Search(): JSX.Element {

    const [value, setValue] = useState<string>("");

    function handleChange(args: ChangeEvent<HTMLInputElement>) {
        setValue(args.target.value);
    }

    function performSearch() {
        alert("Searching for: " + value);
        setValue("");
    }

    return (
        <div className="Search">
			<label>Search website: </label>
            <input type="search" onChange={handleChange} value={value} />
            <button onClick={performSearch}>🔎</button>
            <span>Searching for: {value}</span>
        </div>
    );
}
