import React from 'react';
import PostVoyage from './PostVoyages/PostVoyage';
import AllVoyages from './GetVoyages/AllVoyages';
import EditVoyages from './EditVoyages/EditVoyages';

const VoyagesSplashPage =(props)=>{
    console.log("VoyagesSplashPage Token:", props.token)

    return(
        <div>
            <PostVoyage token={props.token} />
            <AllVoyages token={props.token} />
            <EditVoyages />
        </div>
    )
}

export default VoyagesSplashPage;