import { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBDataTableV5 } from 'mdbreact';

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
                data.rows = res.data;
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
                <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={products}
                />
                {/* <table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Kho</th>
                            <th>Giảm giá</th>
                            <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Kho</th>
                            <th>Giảm giá</th>
                            <th>Mô tả</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.discount}</td>
                                    <td>{product.description}</td>
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
