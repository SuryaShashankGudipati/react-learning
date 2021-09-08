import React, { useState, useEffect } from 'react'

function ChildTwo({ updateCount }) {

    return (
        <div>
            <button onClick={() => updateCount("plus")}>+</button>
            <button onClick={() => updateCount("minus")}>-</button>
        </div >

    );
}

export default ChildTwo;

