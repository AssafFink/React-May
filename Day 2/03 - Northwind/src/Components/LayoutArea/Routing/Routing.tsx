import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Suspense, lazy } from "react";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";

export function Routing(): JSX.Element {

    // Creating a lazy component:
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

    // Creating a suspense object:
    const suspenseAbout = <Suspense> <LazyAbout /> </Suspense>

    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:prodId" element={<ProductDetails />} />


                <Route path="/about" element={suspenseAbout} />

                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}
