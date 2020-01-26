import React, {useEffect, useState} from "react";
import Doctor from "./Doctor";
import Container from "./Container";

const Doctors = ({match}) => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/api/' + match.params.speciality).then(response => response.json()).then(setDoctors);
    }, [match, setDoctors]);

    return <Container>
        {doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}/>)}
    </Container>;
};

export default Doctors;

