import { ADD_CART, DELETE_CART, CLEAR_CART } from "./types";

export const addToCart = (product) => (dispatch, getState) => {
  const state = getState();
  const startCart = [...state.cart.items];
  let cartItems = [...startCart];
  const findExist = cartItems.findIndex(
    (x) => x.productId === product.productId
  );
  if (findExist >= 0) {
    let foundProduct = { ...cartItems[findExist] };
    foundProduct.qty = foundProduct.qty + 1;
    cartItems[findExist] = foundProduct;
  } else {
    product = { ...product, qty: 1 };
    cartItems = [...cartItems, product];
  }

  dispatch({ type: ADD_CART, payload: cartItems });
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const state = getState();
  const cartItems = state.cart.items;
  const removeItem = cartItems.filter((x) => x.productId != productId);
  dispatch({ type: DELETE_CART, payload: removeItem });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
