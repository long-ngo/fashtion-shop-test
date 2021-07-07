import UserForm from './UserForm';
import axios from 'axios';

export default () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: e.target['name'].value,
            username: e.target['username'].value,
            address: e.target['address'].value,
            phone: e.target['phone'].value,
            email: e.target['email'].value
        };

        axios
            .post(
                `${
                    process.env.NODE_ENV === 'production'
                        ? window.location.origin
                        : 'http://localhost:5000'
                }/api/users/create`,
                user
            )
            .catch((err) => console.log(err));
    };
    return (
        <div className="card-body">
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
};
