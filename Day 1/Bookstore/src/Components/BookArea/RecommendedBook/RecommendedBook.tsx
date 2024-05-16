import "./RecommendedBook.css";

export function RecommendedBook(): JSX.Element {

    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1; // starts with 0
        return day >= 6;
    }

    return (
        <div className="RecommendedBook">
            <span>Recommended Book: </span>
            {isWeekend() ? <span>PHP | </span> : <span>TypeScript | </span>}
            
            {isWeekend() && <span>VB</span>}
            {!isWeekend() && <span>JavaScript</span>}
        </div>
    );

}
