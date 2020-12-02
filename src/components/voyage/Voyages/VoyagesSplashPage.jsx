import PostVoyage from './PostVoyages/PostVoyage';
import AllVoyages from './GetVoyages/AllVoyages';

const VoyagesSplashPage = (props) => {

    return(
        <div>
            <PostVoyage token={props.token} />
            <AllVoyages token={props.token} />
        </div>
    )
}

export default VoyagesSplashPage;