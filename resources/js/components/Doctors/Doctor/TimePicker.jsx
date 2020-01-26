import React, {useEffect, useMemo, useState} from "react";
import Time from "./Time";
import moment from "moment";
import axios from "axios";

const times = [8, 9, 10, 11, 12, 13, 14];

const TimePicker = ({doctor, selected, setSelected}) => {
    const baseDate = selected.month() + ' ' + selected.date();

    const [time, setTime] = useState([]);

    useEffect(() => {
        axios.post('/api/appointments', {doctor, date: baseDate}).then(({data}) => setTime(data));
    }, []);

    const onClick = e => axios.post('/api/appointment/', {
            doctor: doctor.id,
            date: baseDate,
            time: e.target.innerText.match(/^\d+/)[0],
            token: localStorage.hasOwnProperty('token') && localStorage.getItem('token')
    }).then(() => setSelected(false));

    const date = selected.date();

    const filtered = useMemo(() => {
        const now = moment().hour();
        const today = moment().date();

        console.log(time);

        return times.filter(element =>
            ((date !== today) || (element > now)) && (!time || !time.some(hour => hour.hour === element))
        );
    }, [date, time]);

    return <>
        {
            !filtered.length
                ? filtered.map((element, i) => <Time key={i} onClick={onClick}>{
                    (element.toString().length === 1 ? '0' + element : element) + ':00'
                }</Time>)
                : <div>Нет свободного времени</div>
        }
    </>;
};

export default TimePicker;
