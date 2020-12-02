import React, { useState } from 'react';
import SearchFood from './PostVoyageForm/stayAndFood/FoodSearch';

const otmBaseURl = 'https://api.opentripmap.com/0.1/en/places/geoname?name=';
const key = '5ae2e3f221c38a28845f05b641e40fe3f97e6a2c4cffeb533255daa6';

const PostSearchVoyage = (props) => {
    const [locationSearch, setLocationSearch] = useState('')
    const [location, setLocation] = useState('');
    const [season, setSeason] = useState('');
    const [stay, setStay] = useState('');
    const [food, setFood] = useState('');
    const [rating, setRating] = useState(3)
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    // const [results, setResults] = useState([]);
    // console.log('search: ', search)
    // console.log('location: ', location)
    // console.log(lat)
    // console.log(lon)

    const locationResults = () => {
        let url = `${otmBaseURl}${locationSearch}&apikey=${key}`

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                // console.log('otm data: ', data.name)
                setLocation(data.name)
                setLat(data.lat)
                setLon(data.lon)
            })
            .catch(err => console.log({
                err,
                message: 'something went wrong with otm fetch'
            }));
    }

    const searchLocation = (e) => {
        e.preventDefault();
        locationResults();
    }
    
    const cancelVoyage =(e)=>{
        e.preventDefault()
        setLat('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3050/voyage/createlog', {
            method: 'POST',
            body: JSON.stringify({ location, season, stay, food, rating }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((postVoyage) => {
                console.log(postVoyage);
                props.closeForm(e)
            })
    }

    
    if (lat === '') {
        return (
            <div>
                <form>
                <label htmlFor='locationSearch'>Search Location</label>
                <input name='locationSearch' onChange={(e) => setLocationSearch(e.target.value)} />
                <button onClick={(e) => searchLocation(e)}>Voyage!!!</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <input name='locationSearch' onChange={(e) => setLocationSearch(e.target.value)} />
                    <button onClick={(e) => searchLocation(e)}>Change Location</button>
                </div>
                <div>
                <form onSubmit={handleSubmit}>
                        <h2>Voyage: {location}</h2>
                        <label htmlFor='season'>Season</label>
                        <select name='season' value={season} onChange={(e) => setSeason(e.target.value)}>
                            <option value=''></option>
                            <option value='summer'>Summer</option>
                            <option value='fall'>Fall</option>
                            <option value='winter'>Winter</option>
                            <option value='spring'>Spring</option>
                        </select>
                        <label htmlFor='stay'>Stay</label>
                        <input name='stay' value={stay} onChange={(e) => setStay(e.target.value)} />
                        <label htmlFor='food'>Food</label>
                        <input name='food' value={food} onChange={(e) => setFood(e.target.value)} />
                        <SearchFood lat={lat} lon={lon} name='food' />
                        {/* <fieldset> */}
                        <label htmlFor='rating'>Rating 1-5</label>
                        <input type='number' min='1' max='5' value={rating} onChange={(e) => setRating(e.target.value)} />
                        {/* <input type='radio' name='rating' value={2} onChange={(e) => setRating(e.target.value)} />
                        <input type='radio' name='rating' value={3} onChange={(e) => setRating(e.target.value)} />
                        <input type='radio' name='rating' value={4} onChange={(e) => setRating(e.target.value)} />
                        <input type='radio' name='rating' value={5} onChange={(e) => setRating(e.target.value)} />
                        </fieldset> */}
                        <button type='submit' >Submit Voyage</button>
                        <button onClick={(e)=>cancelVoyage(e)}>Cancel Voyage</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostSearchVoyage;