import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { useEffect, useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../actions/cart';

// const cartArr = [
//     {
//         name: 'Áo thun',
//         price: 3900,
//         image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//         discount: 10,
//         count: 2,
//         description:
//             'Trang phục quen thuộc giản dị nhưng vẫn đẹp và hợp thời trang',
//     },
//     {
//         name: 'Áo hai dây',
//         price: 100,
//         image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//         discount: 8,
//         count: 3,
//         description:
//             'Còn gì tuyệt vời hơn được diện một chiếc áo hai dây trong những ngày hè oi bức',
//     },
//     {
//         name: 'Áo ba lỗ',
//         price: 110,
//         image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//         discount: 5,
//         count: 10,
//         description: 'Trang phục phù hợp cho mùa hè',
//     },
//     {
//         name: 'Váy',
//         price: 130,
//         image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//         discount: 2,
//         count: 20,
//         description: 'Quá quen thuộc với chị em phụ nữ',
//     },
// ];

const priceTotal = (carts) => {
    return carts.reduce((count, cart) => {
        return count + (cart.price - cart.discount) * cart.count;
    }, 0);
};

const Cart = ({ handleTransparent }) => {
    const cartList = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();

    useEffect(() => {
        handleTransparent(false);
    }, []);

    const handleDelete = (id) => {
        dispatch(removeCart(id));
    };

    return (
        <main id="main">
            <Breadcrumbs />
            <section className="inner-page">
                <div className="container">
                    <h3>Cart</h3>

                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="ibox">
                                    <div className="ibox-title">
                                        <span className="pull-right">
                                            (<strong>{cartList.length}</strong>)
                                            Sản phẩm
                                        </span>
                                        <h5>Trong giỏ hàng của bạn</h5>
                                    </div>

                                    {cartList.map((cart) => {
                                        return (
                                            <div
                                                className="ibox-content"
                                                key={cart._id}
                                            >
                                                <div className="table-responsive">
                                                    <table className="table shoping-cart-table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="cart-product-imitation">
                                                                        <img
                                                                            src={
                                                                                cart.image
                                                                            }
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                objectFit:
                                                                                    'cover',
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="desc">
                                                                    <h3>
                                                                        <a
                                                                            href="#"
                                                                            className="text-navy"
                                                                        >
                                                                            {
                                                                                cart.name
                                                                            }
                                                                        </a>
                                                                    </h3>
                                                                    <p className="small">
                                                                        {
                                                                            cart.description
                                                                        }
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    $
                                                                    {cart.price -
                                                                        cart.discount}
                                                                    <br />
                                                                    <s className="small text-muted">
                                                                        $
                                                                        {
                                                                            cart.price
                                                                        }
                                                                    </s>
                                                                </td>
                                                                <td className="cart-count">
                                                                    <input
                                                                        type="number"
                                                                        min="1"
                                                                        max="100"
                                                                        className="form-control"
                                                                        placeholder={
                                                                            cart.count
                                                                        }
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <h4>
                                                                        $
                                                                        {(cart.price -
                                                                            cart.discount) *
                                                                            cart.count}
                                                                    </h4>
                                                                </td>
                                                                <td className="cart-edit">
                                                                    <a className="text-muted btn">
                                                                        <i className="fas fa-edit"></i>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a
                                                                        className="text-muted btn"
                                                                        onClick={() => {
                                                                            handleDelete(
                                                                                cart._id
                                                                            );
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-trash" />
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="ibox-content">
                                        <button className="btn btn-primary pull-right">
                                            <i className="fa fa fa-shopping-cart" />{' '}
                                            Checkout
                                        </button>
                                        <Link
                                            className="btn btn-white"
                                            to="/products"
                                        >
                                            <i className="fa fa-arrow-left" />{' '}
                                            Continue shopping
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ibox">
                                    <div className="ibox-title">
                                        <h5>Chi tiết giỏ hàng</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <span>Tổng cộng</span>
                                        <h2 className="font-bold">
                                            ${priceTotal(cartList)}
                                        </h2>
                                        <hr />
                                        <span className="text-muted small">
                                            *For United States, France and
                                            Germany applicable sales tax will be
                                            applied
                                        </span>
                                        <div className="m-t-sm">
                                            <div className="btn-group">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary btn-sm"
                                                >
                                                    <i className="fa fa-shopping-cart" />{' '}
                                                    Checkout
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-white btn-sm"
                                                >
                                                    {' '}
                                                    Cancel
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ibox">
                                    <div className="ibox-title">
                                        <h5>Support</h5>
                                    </div>
                                    <div className="ibox-content text-center">
                                        <h3>
                                            <i className="fa fa-phone" /> +43
                                            100 783 001
                                        </h3>
                                        <span className="small">
                                            Please contact with us if you have
                                            any questions. We are avalible 24h.
                                        </span>
                                    </div>
                                </div>
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <p className="font-bold">
                                            Other products you may be interested
                                        </p>
                                        <hr />
                                        <div>
                                            <a
                                                href="#"
                                                className="product-name"
                                            >
                                                {' '}
                                                Product 1
                                            </a>
                                            <div className="small m-t-xs">
                                                Many desktop publishing packages
                                                and web page editors now.
                                            </div>
                                            <div className="m-t text-righ">
                                                <a
                                                    href="#"
                                                    className="btn btn-xs btn-outline btn-primary"
                                                >
                                                    Info{' '}
                                                    <i className="fa fa-long-arrow-right" />{' '}
                                                </a>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <a
                                                href="#"
                                                className="product-name"
                                            >
                                                {' '}
                                                Product 2
                                            </a>
                                            <div className="small m-t-xs">
                                                Many desktop publishing packages
                                                and web page editors now.
                                            </div>
                                            <div className="m-t text-righ">
                                                <a
                                                    href="#"
                                                    className="btn btn-xs btn-outline btn-primary"
                                                >
                                                    Info{' '}
                                                    <i className="fa fa-long-arrow-right" />{' '}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cart;
