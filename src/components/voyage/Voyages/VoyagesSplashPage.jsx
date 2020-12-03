import React, { useState } from 'react';
import AllVoyages from './GetVoyages/AllVoyages';
import PostSearchVoyage from './PostVoyages/PostSearchVoyage';
import {Button} from 'reactstrap'
import './VoyagesSplashPage.css'

const VoyagesSplashPage = (props) => {
    const [voyageForm, setVoyageForm] = useState(undefined)

    const postVoyageBtnClick = (e) => {
        e.preventDefault()
        setVoyageForm('')
    }

    const closeForm =(e)=> {
        e.preventDefault()
        setVoyageForm(undefined)
    }

    const displayVoyageForm =()=>{
        return voyageForm === undefined ?
            (<Button id='button' onClick={(e)=>postVoyageBtnClick(e)} >Create a Voyage!</Button>)
                : (<><PostSearchVoyage token={props.token} closeForm={closeForm} /><Button id='button' onClick={(e)=>closeForm(e)}>Close Form</Button></>)
    }

    return (
        <div>
            <AllVoyages token={props.token} />
            {displayVoyageForm()}
        </div>
    )
}

export default VoyagesSplashPage;