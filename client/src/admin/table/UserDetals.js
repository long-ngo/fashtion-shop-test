import { useParams } from 'react-router';

export default () => {
    const { id } = useParams();

    return <div>users detals {id}</div>;
};
