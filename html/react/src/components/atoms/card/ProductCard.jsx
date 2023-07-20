
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    const { title, image, description, price } = props;
  
    return (
      <div className="card">
        <img className="card-image" src={image} alt={title} />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <h4 className="card-price">${price.toFixed(2)}</h4>
        </div>
      </div>
    );
  };

  ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  
  export default ProductCard;