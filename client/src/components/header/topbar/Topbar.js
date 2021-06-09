import { useEffect, useState } from 'react';
import './Topbar.css';

const DAY = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const fomatDate = (date) => {
    const month = date.getMonth();
    const day = date.getDay();
    const hours = `0${((date.getHours() + 11) % 12) + 1}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    const midday = date.getHours() < 12 ? 'AM' : 'PM';
    return `${MONTH[month]} ${DAY[day]} ${hours}:${minutes}:${seconds} ${midday}`;
};

const Topbar = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setDate(fomatDate(new Date()));
        }, 1000);
    });

    return (
        <section
            id="topbar"
            className="d-flex align-items-center fixed-top topbar-transparent"
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
                <i className="bi bi-phone ms-4 d-lg-flex align-items-center d-none">
                    <span>+84 039 406 669</span>
                </i>
                <i className="bi bi-clock d-flex align-items-center ms-3">
                    <span>{date}</span>
                </i>
            </div>
        </section>
    );
};

export default Topbar;
