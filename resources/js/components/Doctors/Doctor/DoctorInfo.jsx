import AvatarColumn from "./AvatarColumn";
import Column from "./Column";
import {Calendar} from "antd";
import moment from "moment";
import Head from "./Head";
import Description from "./Description";
import React from "react";

const DoctorInfo = ({doctor, hovered, selected, setSelected}) => <>
    <AvatarColumn doctor={doctor}/>
    <Column hovered={hovered || selected}>{
        hovered || selected ? (
            <Calendar
                fullscreen={false}
                validRange={[moment(), moment().add(7, 'days')]}
                onSelect={setSelected}
            />
        ) : (<>
            <Head>Специализация</Head>
            <Description> {doctor.description}</Description>
        </>)
    }</Column>
</>;

export default DoctorInfo;
