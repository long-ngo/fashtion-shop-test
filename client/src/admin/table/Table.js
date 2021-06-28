import { Route, Switch } from 'react-router-dom';
import Users from './Users';
import Products from './Products';

export default () => {
    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Tables</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Tables</li>
                </ol>

                <div className="card mb-4">
                    <div className="card-body">
                        DataTables is a third party plugin that is used to
                        generate the demo table below. For more information
                        about DataTables, please visit the
                        <a target="_blank" href="https://datatables.net/">
                            official DataTables documentation
                        </a>
                        .
                    </div>
                </div>

                <Switch>
                    <Route exact path="/admin/tables/users">
                        <Users />
                    </Route>
                    <Route path="/admin/tables/products">
                        <Products />
                    </Route>
                </Switch>
            </div>
        </main>
    );
};
