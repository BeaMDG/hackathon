import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8282';
// const endpoint = 'http://localhost:9000/api';
export const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      console.log("aqui 2")
      const response = await axios.get(`${endpoint}/products`);
      console.log("aqui 3")
      setProducts(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div>
      <div className="d-grid gap-2">
        <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">
          Create
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                {/* <Link to={`/edit/${product.id}`} className="btn btn-info">
                  Edit
                </Link> */}
                {/* <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


