import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './FoodDisplay.css'

const FoodDisplay = (props) => {
    // console.log('FoodDisplay: ', props.foodResults)
    // console.log('foodResults.length: ', props.foodResults.length)

    const foodSearchResults = () => {
        return props.foodResults.length > 0 ?
            props.foodResults.map((result, index) => {
                console.log(result.restaurant)
                return <div key={index}>
                    <ListGroup className='listGroup' horizontal>
                        <ListGroupItem className='resaurantName' tag='h4'>{result.restaurant.name}</ListGroupItem>
                        <ListGroupItem tag='p'>Cuisines: {result.restaurant.cuisines}</ListGroupItem>                    
                        <ListGroupItem tag='a' className='menu' href={result.restaurant.menu_url} target='_blank'><u>Menu</u></ListGroupItem>                    
                        <ListGroupItem tag='p'>Average Rating:{result.restaurant.user_rating.aggregate_rating}</ListGroupItem>
                    </ListGroup>
                </div>
            })
            : null
    }

    return (
        <div className='restaurantList'>
            {foodSearchResults()}
            {/* {props.foodResults.restaurant.map((result, index)=>{
                return(
                    <div key={index}>
                        <h3>{result.name}</h3>
                    </div>
                )
            })} */}
        </div>
    )
}

export default FoodDisplay;