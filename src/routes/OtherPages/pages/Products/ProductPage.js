import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../../store/cart/action";

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const Info = styled.div`
  margin-left: 30px;
`;
const InfoLabel = styled.span`
  font-size: 14px;
  color: blue;
`;

const InforValue = styled.span`
  font-size: 15px;
  color: red;
`;

const Button = styled.button`
  color: white;
  background-color: #3c3f22;
  font-weight: bold;
  font-size: 18px;
`;

export default function ProductPage() {
  let params = useParams();
  let dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const product = allProducts?.find(
    (item) => item.productId === parseInt(params.productId)
  );
  const {
    productId,
    productCategory,
    productName,
    productImage,
    productStock,
    productPrice,
  } = product;
  return (
    <Wrapper>
      <img src={productImage} height="250px" width="250px" />
      <Info>
        <div>
          <InforValue>ProductId</InforValue> : {productId}
        </div>
        <div>
          <InforValue>ProductCategory</InforValue> : {productCategory}
        </div>
        <div>
          <InforValue>ProductName</InforValue> : {productName}
        </div>
        <div>
          <InforValue>ProductStock</InforValue> :{" "}
          {productStock ? "Available" : "Not Avaialbe"}
        </div>
        <div>
          <InforValue>Product Price</InforValue> : ${productPrice}
        </div>
        {productStock && (
          <Button
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </Button>
        )}
      </Info>
    </Wrapper>
  );
}
