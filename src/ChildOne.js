import React, { useState, useEffect } from 'react'

function ChildOne({ count }) {

    return (
        <div style={{ marginRight: "50px" }}>
            <h1>{count}</h1>
        </div >

    );
}

export default ChildOne;

