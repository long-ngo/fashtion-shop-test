import { useEffect, useState } from "react";
import "./Topbar.css";

const Topbar = () => {
    const [date, setDate] = useState({});

    const fomatDate = (date) => {
        const dateObj = {};
        dateObj.year = date.getFullYear();
        dateObj.month = date.getMonth();
        dateObj.date = date.getDate();
        dateObj.day = date.getDay();
        dateObj.hours = date.getHours();
        dateObj.minutes = date.getMinutes();
        dateObj.seconds = date.getSeconds();
        return dateObj;
    };

    const fomatDay = (day) => {
        let result = "";
        switch (day) {
            case 1:
                result = "Monday";
                break;
            case 2:
                result = "Tuesday";
                break;
            case 3:
                result = "Wednesday";
                break;
            case 4:
                result = "Thursday";
                break;
            case 5:
                result = "Friday";
                break;
            case 6:
                result = "Saturday";
                break;
            default:
                result = "Sunday";
                break;
        }
        return result;
    };

    const fomatMonth = (month) => {
        let result = "";
        switch (month) {
            case 0:
                result = "January";
                break;
            case 1:
                result = "February";
                break;
            case 2:
                result = "March";
                break;
            case 3:
                result = "April";
                break;
            case 4:
                result = "May";
                break;
            case 5:
                result = "June";
                break;
            case 6:
                result = "July";
                break;
            case 7:
                result = "August";
                break;
            case 8:
                result = "September";
                break;
            case 9:
                result = "October";
                break;
            case 10:
                result = "November";
                break;
            default:
                result = "December";
                break;
        }
        return result;
    };

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
                    <span>
                        {fomatMonth(date.month)} {fomatDay(date.day)}{" "}
                        {date.hours < 1
                            ? `${date.hours + 12}`
                            : date.hours < 10
                            ? `0${date.hours}`
                            : date.hours < 13
                            ? `${date.hours}`
                            : `0${date.hours - 12}`}
                        :{date.minutes < 10 ? `0${date.minutes}` : date.minutes}
                        :{date.seconds < 10 ? `0${date.seconds}` : date.seconds}{" "}
                        {date.hours < 12 ? "AM" : "PM"}
                    </span>
                </i>
            </div>
        </section>
    );
};

export default Topbar;
