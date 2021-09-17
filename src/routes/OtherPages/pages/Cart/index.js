import { useSelector } from "react-redux";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import { removeFromCart, clearCart } from "../../../../store/cart/action";

const Th = styled.th`
  border: 1px solid black;
`;

const Td = styled.td`
  border: 1px solid black;
`;

export default function Cart() {
  let dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let total = 0;
  let totalQty = 0;
  cartItems.forEach((eachProduct) => {
    total =
      parseFloat(total) +
      parseFloat(eachProduct.productPrice * eachProduct.qty);
    totalQty = totalQty + eachProduct.qty;
  });

  return (
    <div>
      <table
        style={{
          width: "100%",
        }}
      >
        <tr>
          <Th>Product Name</Th>
          <Th>Price</Th>
          <Th>Qty</Th>
          <Th>Total Price</Th>
        </tr>
        {cartItems.map((product) => {
          return (
            <tr key={product.id}>
              <Td>{product.productName}</Td>

              <Td>${product.productPrice}</Td>
              <Td>{product.qty}</Td>
              <Td>${product.productPrice * product.qty}</Td>
              <Td>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(product.productId));
                  }}
                >
                  Remove From Cart
                </button>
              </Td>
            </tr>
          );
        })}
        <tr>
          <Td>Total</Td>
          <Td />
          <Td>{totalQty} </Td>
          <Td>{total}</Td>
        </tr>
      </table>
      Looks Good <button onClick={() => {}}> Place Order</button>
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

// add order reducer
// add time when the took place
// once that is done call clearCart using dispatch
