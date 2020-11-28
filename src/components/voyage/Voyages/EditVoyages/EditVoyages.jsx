import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import EditVoyagesForm from './EditVoyagesForm/EditVoyagesForm';
import PostVoyage from '../PostVoyages/PostVoyage';
import AllVoyages from '../GetVoyages/AllVoyages';

const EditVoyage = (props) => {
    const [voyages, setVoyages] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [voyageToUpdate, setVoyageToUpdate] = useState([]);

    const fetchVoyages = () => {
        fetch('http://localhost:3050/voyage', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            setVoyages(logData)
        })
    }

    const editUpdateVoyage = (voyage) => {
        setVoyageToUpdate(voyage);
        console.log(voyage);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchVoyages();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <PostVoyage fetchVoyages={fetchVoyages} token={props.token}/>
                </Col>
                <Col md="9">
                    <AllVoyages voyages={voyages} editUpdateVoyage={editUpdateVoyage} updateOn={updateOn} fetchVoyages={fetchVoyages}
                    token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
}
//     return (
//         <div>
//             <button>Edit Voyage Form</button>
//             <EditVoyagesForm />
//         </div>
//     )
// }

export default EditVoyage;