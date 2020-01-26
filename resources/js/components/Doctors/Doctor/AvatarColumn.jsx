import {Avatar} from "antd";
import Name from "./Name";
import Em from "./Em";
import Column from "./Column";
import React from "react";

const AvatarColumn = ({doctor}) => <Column>
    <Avatar src={`/images/doctors/${doctor.id}.jpg`} shape={'circle'} size={200}/>
    <Name>{doctor.name}</Name>
    <Em>{doctor.rank}</Em>
</Column>;

export default AvatarColumn;
