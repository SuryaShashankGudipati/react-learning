import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useRouteMatch } from "react-router-dom";

const Wrapper = styled.div`
width: 300px;
box-shadow: 2px 3px 7px #898bd1;
margin: 6px;
`

const FlexBox = styled.div`
 display:flex;
`

const Img = styled.img`
height: auto;
width: 100px;
`

const Content = styled.div`
  margin-left: 20px;
`

export default function ({ product }) {
    let history = useHistory();
    let surya = useRouteMatch()
    const { productId,
        productCategory,
        productName,
        productImage,
        productStock,
        productPrice } = product
    return (
        <Wrapper>
            <FlexBox onClick={() => history.push(`${surya.path}/${productId}`)}>
                <Img src={productImage} height="50px" width="50px" />
                <Content>
                    <div>{productId}</div>
                    <div>{productCategory}</div>
                    <div>{productName}</div>
                    <div>{productStock}</div>
                    <div>{productPrice}</div>
                </Content>
            </FlexBox>

        </Wrapper >
    )
}