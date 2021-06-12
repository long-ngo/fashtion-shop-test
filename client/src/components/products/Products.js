import { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

const Products = ({ handleTransparent }) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        handleTransparent(false);
    }, []);

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/products`
            )
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
        return () => setProduct([]);
    }, []);

    return (
        <main id="main">
            <Breadcrumbs />
            <section className="inner-page">
                <div className="container">
                    <Container>
                        <Row>
                            {products.map((product) => {
                                return (
                                    <Col key={product._id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img
                                                variant="top"
                                                src={product.image}
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {product.productName}
                                                </Card.Title>
                                                <Card.Text>
                                                    Giá {product.unitPrice}
                                                </Card.Text>
                                                <Card.Text>
                                                    Kho: {product.unitsInStock}{' '}
                                                    cái
                                                </Card.Text>
                                                <Button variant="primary">
                                                    Thêm vào giỏ
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </section>
        </main>
    );
};

export default Products;
