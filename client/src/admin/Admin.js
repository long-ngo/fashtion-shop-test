import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { offHeader, onHeader } from '../redux/actions/header';
import { offFooter, onFooter } from '../redux/actions/footer';
import { Route, Switch } from 'react-router-dom';
import './Admin.css';

import Topbar from './topbar/Topbar';
import Navbar from './navbar/Navbar';
import Content from './content/Content';
import Footer from './footer/Footer';
import Table from './table/Table';

const Admin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(offHeader());
        dispatch(offFooter());
        return () => {
            dispatch(onHeader());
            dispatch(onFooter());
        };
    }, []);

    return (
        <div className="admin">
            <div className="sb-nav-fixed">
                <Topbar />

                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <Navbar />
                    </div>

                    <div id="layoutSidenav_content">
                        <Switch>
                            <Route path="/admin/tables">
                                <Table />
                            </Route>
                            <Route path="/admin">
                                <Content />
                            </Route>
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
