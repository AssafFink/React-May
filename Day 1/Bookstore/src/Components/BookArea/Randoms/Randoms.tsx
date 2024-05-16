import "./Randoms.css";

export function Randoms(): JSX.Element {

    const arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push({
            id: i,
            price: Math.floor(Math.random() * 81) + 10,
            sale: "Some Sale..."
        });
    }

    return (
        <div className="Randoms">
            {arr.map(item =>
                <div key={item.id}>
                    <span>Sale: {item.sale}, Price: {item.price}</span>
                    <br />
                </div>
            )}
        </div>
    );
}
