import axios from 'axios';
import ProductForm from './ProductForm';

export default () => {
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
            .post(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/products/create`,
                product
            )
            .catch((err) => console.log(err));
    };

    return (
        <div className="card-body">
            <ProductForm onSubmit={handleSubmit} />
        </div>
    );
};
