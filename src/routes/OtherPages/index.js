import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

const FlexBox = styled.div`
  display: flex;
  background-color: #88dfde;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-right: 30px;
`;

const links = [
  { to: "/products", label: "Products" },
  { to: "/orders", label: "Orders" },
  { to: "/admin", label: "Admin" },
];

export default function OtherPages() {
  const cartItems = useSelector((state) => state.cart.items);
  let totalItems = 0;
  cartItems.forEach((x) => {
    totalItems = totalItems + x.qty;
  });

  return (
    <BrowserRouter>
      <FlexBox>
        <div>
          {links.map((eachLink) => {
            const { to, label } = eachLink;
            return (
              <Button variant="outlined" key={label}>
                <Link to={to}>{label}</Link>
              </Button>
            );
          })}
        </div>
        <div>
          <Link to={"/cart"}>
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartTwoToneIcon />
            </Badge>
          </Link>
        </div>
      </FlexBox>

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
  );
}
