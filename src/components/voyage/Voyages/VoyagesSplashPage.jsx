import React from 'react';
import PostVoyage from './PostVoyages/PostVoyage';
import AllVoyages from './GetVoyages/AllVoyages';

const VoyagesSplashPage =()=>{
    return(
        <div>
            <PostVoyage />
            <AllVoyages />
        </div>
    )
}

export default VoyagesSplashPage;