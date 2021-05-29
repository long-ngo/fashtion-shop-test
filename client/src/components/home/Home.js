import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${
                    process.env.NODE_ENV === 'production'
                        ? location.origin
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
            <div>Home Pages</div>
            {JSON.stringify(products)}
        </div>
    );
};

export default Home;
