import { Authors } from "../../AuthorArea/Authors/Authors";
import { Book } from "../../BookArea/Book/Book";
import { Randoms } from "../../BookArea/Randoms/Randoms";
import { RecommendedBook } from "../../BookArea/RecommendedBook/RecommendedBook";
import { StoreDescription } from "../../BookArea/StoreDescription/StoreDescription";
import { TopBook } from "../../BookArea/TopBook/TopBook";
import { Clicker } from "../../SharedArea/Clicker/Clicker";
import { Clock } from "../../SharedArea/Clock/Clock";
import { CurrentDate } from "../../SharedArea/CurrentDate/CurrentDate";
import { Search } from "../../SharedArea/Search/Search";
import "./Content.css";

export function Content(): JSX.Element {
    return (
        <div className="Content">
            <StoreDescription />
            <Book bookName="React for Beginners" bookPrice={25} />
            <Book bookName="Advanced JS" bookPrice={50} />
            <Book bookName="TS for Experts" bookPrice={70} />
            <TopBook />
            <RecommendedBook />
            <Authors />
            <Randoms />
            <CurrentDate />
            <Clicker />
            <Search />
            <Clock />
        </div>
    );
}