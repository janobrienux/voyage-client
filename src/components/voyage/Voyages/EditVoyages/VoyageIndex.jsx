// import React, {useState, useEffect} from 'react';
// import {Button} from 'reactstrap';
// import VoyageEdit from './VoyageEdit';

// const VoyageIndex = (props) => {
//     const [voyages, setVoyages] = useState([]);
//     const [updateActive, setUpdateActive] = useState(false);
//     const [voyageToUpdate, setVoyageToUpdate] = useState({});

//     const editUpdateVoyage = (voyage) => {
//         setVoyageToUpdate(voyage);
//         console.log(voyage);
//     }

//     const updateOn = () => {
//         setUpdateActive(true);
//     }

//     const updateOff = () => {
//         setUpdateActive(false);
//     }

//         return (
//             <div>
//                 <Button color="warning" onClick={() => {props.editUpdateVoyage(voyage); props.updateOn()}}>Update</Button>
//                 <VoyageEdit voyages={voyages} editUpdateVoyage={editUpdateVoyage} updateOn={updateOn} token={props.token}/>
//                 {updateActive ? <VoyageEdit voyageToUpdate={voyageToUpdate} updateOff={updateOff} token={props.token} /> : <></>}
//             </div>
//     );
// };

// export default VoyageIndex;