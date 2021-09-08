import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Home() {
    let history = useHistory()
    let location = useLocation()
    console.log("history", history)
    console.log("location", location)
    return (
        <div>
            <button onClick={() => history.push("/info/sales")}>Sales Page</button>
            <button onClick={() => history.push("/info/randompage")}>Random Page</button>
        </div>
    )
}