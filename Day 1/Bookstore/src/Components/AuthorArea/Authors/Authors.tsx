import "./Authors.css";

export function Authors(): JSX.Element {

    const authors = [
        { id: 1, firstName: "Bart", lastName: "Simpson" },
        { id: 2, firstName: "Lisa", lastName: "Simpson" },
        { id: 3, firstName: "Homer", lastName: "Simpson" }
    ];

    return (
        <div className="Authors">
            <span>Authors: </span>
			{authors.map(item => <span key={item.id}>{item.firstName} {item.lastName} | </span>)}
        </div>
    );
}
