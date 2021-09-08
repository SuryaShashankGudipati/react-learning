import React from "react";
import Dinesh from './Dinesh'

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function Main() {
    return (<div>Info</div>)
}


function Stupid() {
    let params = useParams();

    return <div> you are searching for product : {params.productId}</div>;
}


export default function Info() {
    let surya = useRouteMatch()

    return (
        <div>
            <Switch>

                <Route path={`${surya.path}/sales`}>
                    <div> You are in sales</div>
                </Route>
                <Route path={`${surya.path}/:productId`}>
                    <Stupid />
                </Route>
                <Route path={surya.path}>
                    <h3>info landing page</h3>
                </Route>
            </Switch>
        </div>

    )
}