import { Content } from "../Content/Content";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div>
            <Menu />
            <hr />
            <Header />
            <hr />
            <Content />
        </div>
    );
}

