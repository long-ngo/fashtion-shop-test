import { useEffect } from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

const Error = ({ handleTransparent }) => {
    useEffect(() => {
        handleTransparent(false);
    }, []);

    return (
        <main id="main">
            <Breadcrumbs />
            <section className="inner-page">
                <div className="container">
                    <h3>Error</h3>
                </div>
            </section>
        </main>
    );
};

export default Error;
