import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editCart } from '../../../actions/cart';
import ProductForm from './ProductForm';

export default () => {
    const { id } = useParams();
    const [products, setProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/products/${id}`
            )
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
        return () => setProduct([]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            name: e.target['name'].value,
            price: e.target['price'].value,
            discount: e.target['discount'].value,
            stock: e.target['stock'].value,
            image: e.target['image'].value,
            description: e.target['description'].value
        };

        axios
            .put(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/products/${id}`,
                product
            )
            .catch((err) => console.log(err));

        dispatch(editCart(id, product));
    };

    return (
        <div className="card-body">
            {(() => {
                if (products.length === 0)
                    return (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    );
            })()}
            {products.map((product, index) => {
                return (
                    <ProductForm
                        key={index}
                        submit={handleSubmit}
                        data={product}
                    />
                );
            })}
        </div>
    );
};
