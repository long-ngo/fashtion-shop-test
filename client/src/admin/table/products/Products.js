import { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBDataTableV5 } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import './Products.css';

const data = {
    columns: [
        {
            label: 'Tên sản phẩm',
            field: 'name',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Giá',
            field: 'price',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Giảm giá',
            field: 'discount',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Kho',
            field: 'stock',
            sort: 'asc',
            width: 200
        }
    ],
    rows: []
};

export default () => {
    const [products, setProduct] = useState({ ...data });
    const [productId, setProductId] = useState('');

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
                data.rows = res.data.map((product, index) => {
                    product.clickEvent = () => setProductId(product._id);
                    return product;
                });
                setProduct({ ...data });
            })
            .catch((err) => console.log(err));
        return () => setProduct({});
    }, []);

    return (
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-table me-1" />
                Products table
            </div>
            <div className="card-body">
                <div>
                    <Link
                        to="/admin/tables/products/create"
                        className="card-body__btn"
                    >
                        <BsPlus fontSize="1.8em" />
                    </Link>

                    <MDBDataTableV5
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={products}
                        searchTop
                        searchBottom={false}
                    />
                </div>
            </div>
            {(() => {
                if (productId)
                    return (
                        <Redirect to={`/admin/tables/products/${productId}`} />
                    );
            })()}
        </div>
    );
};
