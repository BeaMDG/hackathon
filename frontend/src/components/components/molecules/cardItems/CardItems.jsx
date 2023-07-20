import './CardItems.css'

import contents from '../../productData/content';
import ProductCard from '../../atoms/card/ProductCard';

function Cardgeneric() {
    const products = contents.map(product => (
        <ProductCard key={product.id} {...product}/>
    ))
     return(
        <>
            <div class>{products}</div>
            <h1 class="text-6xl">Hola mundo</h1>
        </>
     )
 }
 export default Cardgeneric