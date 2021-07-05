import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

export default () => {
    const [users, setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/users/${id}`
            )
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: e.target['name'].value,
            username: e.target['username'].value,
            address: e.target['address'].value,
            phone: e.target['phone'].value,
            email: e.target['email'].value
        };

        axios
            .put(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/users/${id}`,
                user
            )
            .catch((err) => console.log(err));
    };

    return (
        <div className="card-body">
            {(() => {
                if (users.length === 0)
                    return (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    );
            })()}

            {users.map((user, index) => {
                return (
                    <Form key={index} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Tên người dùng</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    defaultValue={user.name}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Tên đăng nhập</Form.Label>
                                <Form.Control
                                    name="username"
                                    type="text"
                                    defaultValue={user.username}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                name="address"
                                defaultValue={user.address}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridPhone">
                            <Form.Label>Điện thoại</Form.Label>
                            <Form.Control
                                name="phone"
                                defaultValue={user.phone}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                defaultValue={user.email}
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
