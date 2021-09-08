import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'


const Wrapper = styled.div`
`

const FlexBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

function Parent() {
    const [count, setCount] = useState(0)
    function updateCount(param) {
        if (param === "plus") {
            const newCount = count + 1
            setCount(newCount)
        } else if (param === "minus") {
            const newCount = count - 1
            setCount(newCount)
        }
    }
    return (
        <Wrapper>
            <FlexBox>
                <ChildOne count={count} />
                <ChildTwo updateCount={updateCount} />
            </FlexBox>
        </Wrapper >

    );
}

export default Parent;

