import "./StoreDescription.css";
import imageSource from "../../../Assets/Images/bookstore.jpg";

export function StoreDescription(): JSX.Element {
    return (
        <div className="StoreDescription">
            <img src={imageSource} />
			<p>Find any book you like in our bookstore website!</p>
        </div>
    );
}
