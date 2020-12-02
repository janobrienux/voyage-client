import { useState } from 'react';
import Voyage from './Voyage';
import EditForm from './EditForm';

const AllVoyages = (props) => {
    const [voyages, setVoyages] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [voyageToUpdate, setVoyageToUpdate] = useState({});
    console.log('AllVoyages Token:', props.token)

    const fetchResults = () => {
        fetch('http://localhost:3050/voyage/getlogs', {
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
                <button onClick={(e) => voyageBtn(e)}>Voyage!</button>
                {voyages.length === 0 ? null : <><Voyage voyages={voyages} editUpdateVoyage={editUpdateVoyage} updateOn={updateOn} updateOff={updateOff} fetchResults={fetchResults} token={props.token} /><button onClick={(e) => closeVoyages(e)}>Close Voyages</button></>}
                {updateActive ? <EditForm voyages={voyages} voyageToUpdate={voyageToUpdate} token={props.token} updateOff={updateOff} fetchResults={fetchResults} /> : <></>}
            </div>
        </div>
    );
};

export default AllVoyages;