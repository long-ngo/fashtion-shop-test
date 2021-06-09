const Breadcrumbs = () => {
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Inner Page</h2>
                    <ol>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Inner Page</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumbs;
