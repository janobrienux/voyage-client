import React, { useState } from 'react';
import FoodDisplay from './stayFoodDisplay/FoodDisplay';

const foodBaseUrl = 'https://developers.zomato.com/api/v2.1/geocode'
const key = 'ee4ec790dd92ce784618a89b923b5a2b'

const SearchFood = (props) => {
    const [foodResults, setFoodResults] = useState([]);

    const foodFetch = () => {
        let lat = props.lat;
        let lon = props.lon;
        let url = `${foodBaseUrl}?lat=${lat}&lon=${lon}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Zomato-API-key': key
            }
        })
            .then(res => res.json())
            .then(data => setFoodResults(data.nearby_restaurants))
            .catch(err => console.log(err));
    };

    const submitFoodSearch = (e) => {
        e.preventDefault();
        foodFetch();
        // console.log('Submit: ', foodResults)
    }

    return (
        <div>
            <FoodDisplay foodResults={foodResults} />
            <br/>
            <button onClick={(e) => submitFoodSearch(e)}>Restaurant Recommendations</button>
        </div>
    )
}

export default SearchFood;