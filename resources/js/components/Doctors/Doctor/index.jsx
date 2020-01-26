import React, {useState} from "react";
import Card from "./Card";
import DoctorInfo from "./DoctorInfo";
import TimePicker from "./TimePicker";


const Doctor = ({doctor}) => {
    const [hovered, setHover] = useState(false);
    const [selected, setSelected] = useState();

    const setHovered = () => setHover(true);
    const setUnhovered = () => setHover(false);

    return <Card onMouseEnter={setHovered} onMouseLeave={setUnhovered} selected={!!selected} hovered={hovered}>{
        selected
            ? <TimePicker doctor={doctor} selected={selected} setSelected={setSelected}/>
            : <DoctorInfo doctor={doctor} hovered={hovered} selected={selected} setSelected={setSelected}/>
    }</Card>
};

export default Doctor;
