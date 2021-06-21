import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { offHeader, onHeader } from '../../actions/header';
import { offFooter, onFooter } from '../../actions/footer';

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
        <div>
            <h3>Admin</h3>
        </div>
    );
};

export default Admin;
