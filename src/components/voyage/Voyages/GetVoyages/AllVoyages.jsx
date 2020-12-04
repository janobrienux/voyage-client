import { useState } from 'react';
import Voyage from './Voyage';
import EditForm from './EditForm';
import APIURL from '../../../../helpers/environment';
import {Button} from 'reactstrap';

const AllVoyages = (props) => {
    const [voyages, setVoyages] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [voyageToUpdate, setVoyageToUpdate] = useState({});
    console.log('AllVoyages Token:', props.token)

    const fetchResults = () => {
        fetch(`${APIURL}/voyage/getlogs`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(res => res.json())
            .then(data => setVoyages(data))
    }
    const voyageBtn = (event) => {
        event.preventDefault();
        fetchResults();
    }

    const editUpdateVoyage = (voyages) => {
        console.log('Voyage:', voyages)
        setVoyageToUpdate(voyages);
        // console.log(log);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const closeVoyages = (e) => {
        e.preventDefault();
        setVoyages([])
    }

    return (
        <div>
            <div>
                <Button id='button' onClick={(e) => voyageBtn(e)}>Voyage!</Button>
                {voyages.length === 0 ? null : <><Voyage voyages={voyages} editUpdateVoyage={editUpdateVoyage} updateOn={updateOn} updateOff={updateOff} fetchResults={fetchResults} token={props.token} /><button id='button' onClick={(e) => closeVoyages(e)}>Close Voyages</button></>}
                {updateActive ? <EditForm voyages={voyages} voyageToUpdate={voyageToUpdate} token={props.token} updateOff={updateOff} fetchResults={fetchResults} /> : <></>}
            </div>
        </div>
    );
};

export default AllVoyages;
