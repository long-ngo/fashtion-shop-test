import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import UserForm from './UserForm';

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

    const onDelete = () => {
        axios
            .delete(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/users/${id}`
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
                    <UserForm
                        key={index}
                        onSubmit={handleSubmit}
                        data={user}
                        onDelete={onDelete}
                    />
                );
            })}
        </div>
    );
};
