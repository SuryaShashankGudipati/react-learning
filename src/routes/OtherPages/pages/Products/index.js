import React from "react";

import Home from './Home'
import ProductPage from './ProductPage'

import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";


function Stupid() {
    let params = useParams();

    return <div> you are searching for product : {params.productId}</div>;
}


export default function Products() {
    let surya = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route path={`${surya.path}/:productId`}>
                    <ProductPage />
                </Route>
                <Route path={surya.path}>
                    <Home />
                </Route>
            </Switch>
        </div>

    )
}