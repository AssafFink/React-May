import "./Book.css";

type BookProps = {
    bookName: string;
    bookPrice: number;
};

export function Book(props: BookProps): JSX.Element {
    return (
        <div className="Book">
			<p>Name: {props.bookName}</p>
            <p>Price: {props.bookPrice}</p>
        </div>
    );
}
