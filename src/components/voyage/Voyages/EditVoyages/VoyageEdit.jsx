// import React, {useState} from 'react';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import VoyageEditForm from './VoyageEditForm';

// const VoyageEdit =(props)=>{
//     const [modal, setModal] = useState(false);

//     const toggle =()=>setModal(!modal);
    // const voyageUpdate = (event, voyage) => {
    //     event.preventDefault();
    //     fetch(`http://localhost:3050/voyage/${props.voyageToUpdate.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({location: editLocation, season: editSeason, stay: editStay, food: editFood, rating: editRating}),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     }).then((res => {
    //         props.fetchVoyages();
    //         props.updateOff();
    //     }))
    // }

//     return(
//         <div>
//             <Button onClick={toggle}>Update Voyage</Button>
//             <Modal isOpen={modal} toggle={toggle}>
//                 <ModalBody>
//                     <ModalHeader toggle={toggle}></ModalHeader>
//                     <h1>Update Voyage</h1>
//                     <VoyageEditForm token={props.token} />
//                 </ModalBody>
//             </Modal>
//         </div>
//     )
// }

// export default VoyageEdit;