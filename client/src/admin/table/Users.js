import axios from 'axios';
import { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';

const data = {
    columns: [
        {
            label: 'Tên',
            field: 'name',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Tên đăng nhập',
            field: 'username',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Địa chỉ',
            field: 'address',
            sort: 'asc',
            width: 200
        }
    ],
    rows: []
};

export default () => {
    const [users, setUser] = useState({ ...data });

    const handleClick = (id) => {
        alert(id);
    };

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
                data.rows = res.data.map((user) => {
                    user.clickEvent = () => {
                        handleClick(user._id);
                    };
                    return user;
                });

                setUser({ ...data });
            })
            .catch((err) => console.log(err));
        return () => setUser({});
    }, []);

    return (
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-table me-1" />
                Users table
            </div>

            <div className="card-body">
                <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={users}
                />
                {/* <table id="datatablesSimple">
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
             */}
            </div>
        </div>
    );
};
