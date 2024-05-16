import "./TopBook.css";

export function TopBook(): JSX.Element {

    function display() {
        alert("React with TypeScript");
    }

    return (
        <div className="TopBook">
			<button onClick={display}>Display Top Book</button>
        </div>
    );
}
