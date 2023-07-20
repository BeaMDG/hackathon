import ProductCard from "../atoms/card/ProductCard";


const productData = [
  {
    id: 1,
    title: "Patito deportista que juega al tennis",
    image: "https://link-to-image.com/product1.png",
    description: "blablablabla",
    price: 3.90,
  },
  {
    id: 2,
    title: "Patito estrella del Rock",
    image: "https://link-to-image.com/product2.png",
    description: "blablablabla",
    price: 9.89,
  },
  {
    id: 3,
    title: "Patito original decoracion de baño",
    image: "https://link-to-image.com/product3.png",
    description: "blablablabla",
    price: 2.50,
  }
];

const content = () => {
    return (
      <div className="App">
        <h1>Lista de productos</h1>
        <div className="card-container">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default content;
