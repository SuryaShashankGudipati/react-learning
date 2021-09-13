import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'


import Product from './Product'
import { getAllProducts } from '../../../../../store/products/action'

const Wrapper = styled.div`
 display:flex;
 flex-wrap: wrap;
 justify-content: center;
    align-items: center;
`

export default function () {
    let dispatch = useDispatch()
    const [filter, setFilter] = useState("")
    const [filteredProduct, setFilteredProducets] = useState([])
    const allProducts = useSelector(state => state.products.allProducts)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    useEffect(() => {
        setFilteredProducets(allProducts)
    }, [allProducts])

    const handleFilter = e => {
        let str = e.target.value
        setFilter(str)
        const filteredProducts = allProducts.filter(prod => prod.productName.toLowerCase().includes(str.toLowerCase()))
        setFilteredProducets(filteredProducts)
    }

    return (
        <div>
            <Wrapper>
                <input value={filter} placeholder="type something" onChange={e => handleFilter(e)} />
            </Wrapper>
            <Wrapper>
                {filteredProduct.map(eachProduct => <Product key={eachProduct.productId} product={eachProduct} />)}
            </Wrapper>
        </div>

    )
}