import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'

import { removeFromCart, clearCart } from '../../../../store/cart/action'

const EachItem = styled.div`
  display:flex;
`

export default function () {
    let dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const allProducts = useSelector(state => state.products.allProducts)
    let productDetails = []
    cartItems.forEach(id => {
        const foundItem = allProducts.find(eachItem => eachItem.productId === id)
        productDetails = [...productDetails, foundItem]
    })

    let total = 0
    productDetails.forEach(eachProduct => total = parseFloat(total) + parseFloat(eachProduct.productPrice))

    let itemDetails = []

    productDetails.forEach(eachProduct => {
        let eachItem = {
            product: eachProduct
        }
        const qty = productDetails.filter(item => item.productId === eachProduct.productId).length
        eachItem.qty = qty
        itemDetails = [...itemDetails, eachItem]
    })



    return (
        <div>
            {itemDetails.map(item => {
                const { product, qty } = item
                return (
                    <EachItem key={product.id} >
                        <div>
                            {product.productName}
                        </div>
                        -------------
                        <div>
                            ${product.productPrice}
                        </div>
                        <div>qty: {qty}</div>
                        <div>
                            <button onClick={() => { dispatch(removeFromCart(product.productId)) }}> Remove From Cart</button>
                        </div>
                    </EachItem>
                )
            }
            )}
            {
                productDetails.length &&
                <div>
                    Total -------- ${total}
                </div>
            }

            Looks Good < button onClick={() => { }}> Place Order</button >


            <button onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
        </div >
    )
}