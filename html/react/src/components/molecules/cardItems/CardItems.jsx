import './CardItems.css'

import contents from '../../productData/content';
import ProductCard from '../../atoms/card/ProductCard';

function Cardgeneric() {
    const products = contents.map(product => (
        <ProductCard key={product.id} {...product}/>
    ))
     return(
        <>
            <div>{products}</div>
        </>
     )
 }
 export default Cardgeneric