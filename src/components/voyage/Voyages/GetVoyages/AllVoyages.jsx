import {useState} from 'react';
import Voyage from './Voyage/Voyage';

const AllVoyages = () => {
    const [voyages, setVoyages] = useState([])

    const fetchResults =()=>{
        fetch('http://localhost:3010/voyage/getlogs',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(data => setVoyages(data))
    }
    const voyageBtn =(event)=>{
        event.preventDefault();
        fetchResults();
    }

    // const testVoyage = [
    //     {
    //         id: 1,
    //         location: 'colorado',
    //         season: 'winter',
    //         stay: 'breckenridge hotel',
    //         food: 'beer and pizza',
    //         rating: 5
    //     },
    //     {
    //         id: 2,
    //         location: 'spain',
    //         season: 'summer',
    //         stay: 'hotel',
    //         food: 'piaya',
    //         rating: 4
    //     },
    //     {
    //         id: 3,
    //         location: 'kokamo',
    //         season: 'anytime',
    //         stay: 'with the beach boys',
    //         food: 'pina colada ',
    //         rating: 2

    //     }
    // ]

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