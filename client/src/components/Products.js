import { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

const Products = () => {
    const [products, setProduct] = useState([]);

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
        <div className="Home">
            <Container>
                <Row>
                    {products.map((product, index) => {
                        return (
                            <Col>
                                <Card style={{ width: '18rem' }} key={index}>
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
                                            Còn lại {product.unitsInStock} cái
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
    );
};

export default Products;
