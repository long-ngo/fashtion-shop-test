import axios from 'axios';
import { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

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

const Users = () => {
    const [users, setUser] = useState({ ...data });
    const [userId, setUserId] = useState('');

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
                    user.clickEvent = () => setUserId(user._id);
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
                <Link
                    to="/admin/tables/users/create"
                    className="card-body__btn"
                >
                    <BsPlus fontSize="1.8em" />
                </Link>
                <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={users}
                    fullPagination
                    searchTop
                    searchBottom={false}
                />
            </div>
            {(() => {
                if (userId)
                    return <Redirect to={`/admin/tables/users/${userId}`} />;
            })()}
        </div>
    );
};

export default Users;
