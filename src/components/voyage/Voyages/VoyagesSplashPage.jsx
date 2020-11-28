import React from 'react';
import PostVoyage from './PostVoyages/PostVoyage';
import AllVoyages from './GetVoyages/AllVoyages';
import EditVoyages from './EditVoyages/EditVoyages';

const VoyagesSplashPage =()=>{
    return(
        <div>
            <PostVoyage />
            <AllVoyages />
            <EditVoyages />
        </div>
    )
}

export default VoyagesSplashPage;