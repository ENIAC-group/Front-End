import React from 'react'

const ReservationTable = ({ PatiantName, Day, date, time }) => {
    return (
        <div>
            <li className="table-row">
                <div className="col col-1" style={{ fontFamily: "Ios15Medium" }} data-label="نام بیمار">{PatiantName}</div>
                <div className="col col-2" style={{ fontFamily: "Ios15Medium" }} data-label="روز">{date}</div>
                <div className="col col-3" style={{ fontFamily: "Ios15Medium" }} data-label="ساعت">{time}</div>

            </li>


        </div>
    )
}

export default ReservationTable