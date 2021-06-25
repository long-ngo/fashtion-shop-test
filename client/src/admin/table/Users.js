import axios from 'axios';
import { useEffect, useState } from 'react';

export default () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/users`
            )
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => console.log(err));
        return () => setUser([]);
    }, []);

    return (
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-table me-1" />
                Users table
            </div>
            <div className="card-body">
                <table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Tên đăng nhập</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Tên</th>
                            <th>Tên đăng nhập</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.address.street}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
