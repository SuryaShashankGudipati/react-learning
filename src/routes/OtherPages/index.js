import React from "react";
import Button from '@material-ui/core/Button';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Products from './pages/Products'


const links = [
    { to: "/products", label: "Products" },
    { to: "/orders", label: "Orders" },
    { to: "/cart", label: "Cart" },
    { to: "/admin", label: "Admin" },
]

export default function OtherPages() {
    return (
        <BrowserRouter>
            {links.map(eachLink => {
                const { to, label } = eachLink
                return (
                    <Button variant="outlined" key={label}>
                        <Link to={to} >{label}</Link>
                    </Button>
                )
            })}

            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Redirect to="/admin" />

            </Switch>

        </BrowserRouter>
    )
}