import React from "react";
import { useSelector } from "react-redux";

import Login from '../routes/Login'
import OtherPages from '../routes/OtherPages'



export default function Layout() {
    const isAuthenticated = useSelector(state => state.auth.isLoggged)
    return (
        <div>
            {!isAuthenticated && <Login />}
            {isAuthenticated && <OtherPages />}
        </div>
    )
}