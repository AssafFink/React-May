import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <a href="#">Home</a>
            <span> | </span>
            <a href="#">Books</a>
            <span> | </span>
            <a href="#">About</a>
        </div>
    );
}