import { Button, Form, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default ({ data = {}, onSubmit, onDelete = () => {} }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Tên người dùng</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        defaultValue={data.name ? data.name : ''}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control
                        name="username"
                        type="text"
                        defaultValue={data.username ? data.username : ''}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                    name="address"
                    defaultValue={data.address ? data.address : ''}
                />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
                <Form.Label>Điện thoại</Form.Label>
                <Form.Control
                    name="phone"
                    defaultValue={data.phone ? data.phone : ''}
                />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    name="email"
                    defaultValue={data.email ? data.email : ''}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                {Object.keys(data).length > 0 ? 'Cập nhập' : 'Tạo'}
            </Button>
            {(() => {
                if (Object.keys(data).length > 0)
                    return (
                        <Link
                            to="/admin/tables/users"
                            className="card-body__btn"
                            onClick={onDelete}
                        >
                            <FaTrash fontSize="1.2em" />
                        </Link>
                    );
            })()}
        </Form>
    );
};
