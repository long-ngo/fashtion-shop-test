import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editCart } from '../../actions/cart';

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
            .put(`http://localhost:5000/api/products/${id}`, product)
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
                    <Form key={index} onSubmit={handleSubmit} action="/">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    defaultValue={product.name}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Giá</Form.Label>
                                <Form.Control
                                    name="price"
                                    type="text"
                                    defaultValue={product.price}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDiscount">
                            <Form.Label>Giảm giá</Form.Label>
                            <Form.Control
                                name="discount"
                                defaultValue={product.discount}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridStock">
                            <Form.Label>Kho</Form.Label>
                            <Form.Control
                                name="stock"
                                defaultValue={product.stock}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridImage">
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control
                                name="image"
                                defaultValue={product.image}
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control
                                name="description"
                                as="textarea"
                                rows={3}
                                defaultValue={product.description}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cập nhập
                        </Button>
                    </Form>
                );
            })}
        </div>
    );
};
