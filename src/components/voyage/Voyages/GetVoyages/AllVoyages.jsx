import {useState} from 'react';
import Voyage from './Voyage/Voyage';


const AllVoyages = () => {
    const [voyages, setVoyages] = useState([]);

    const fetchResults =()=>{
        fetch('http://localhost:3050/voyage/getlogs',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(data => setVoyages(data))
    }
    const voyageBtn =(event)=>{
        event.preventDefault();
        fetchResults();
    }

    return (
        <div>
            <div>
                <button onClick={(e)=> voyageBtn(e)}>Voyage!</button>
                {voyages.length === 0 ? null : <Voyage voyages={voyages} />}
            </div>
        </div>
    );
};

export default AllVoyages;