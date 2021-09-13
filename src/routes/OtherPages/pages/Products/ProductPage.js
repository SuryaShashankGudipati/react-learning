import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'


export default function ProductPage() {
    let params = useParams();
    const allProducts = useSelector(state => state.products.allProducts)
    const product = allProducts?.find(item => item.productId === parseInt(params.productId))
    const { productId,
        productCategory,
        productName,
        productImage,
        productStock,
        productPrice } = product
    return (<div>
        <div>{productId}</div>
        <div>{productCategory}</div>
        <div>{productName}</div>
        <div>{productStock}</div>
        <div>{productPrice}</div>
    </div>)
}


