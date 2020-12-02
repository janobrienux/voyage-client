import React, {useState} from 'react';
import Voyage from './Voyage';


const AllVoyages = (props) => {
    const [voyages, setVoyages] = useState([]);
    // console.log('AllVoyages Token:', props.token)

    const fetchResults =()=>{
        fetch('http://localhost:3050/voyage/getlogs',{
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(data => setVoyages(data))
    }
    const voyageBtn =(event)=>{
        event.preventDefault();
        fetchResults();
    }

    const closeVoyages =(e)=>{
        e.preventDefault();
        setVoyages([])
    }

    return (
        <div>
            <div>
                <button onClick={(e)=> voyageBtn(e)}>Voyage!</button>
                {voyages.length === 0 ? null : <><Voyage voyages={voyages} token={props.token} /><button onClick={(e)=>closeVoyages(e)}>Close Voyages</button></>}
                
            </div>
        </div>
    );
};

export default AllVoyages;