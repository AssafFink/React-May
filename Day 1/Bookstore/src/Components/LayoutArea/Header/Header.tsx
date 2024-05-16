import css from "./Header.module.css";

export function Header(): JSX.Element {
    return (
        <div className={css.BackColor}>
            <h1>Bookstore Website</h1>
        </div>
    );
}