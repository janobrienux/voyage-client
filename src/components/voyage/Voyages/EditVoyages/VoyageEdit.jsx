// import React, {useState} from 'react';
// import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import VoyageEditForm from './VoyageEditForm';

// const VoyageEdit =(props)=>{
//     const [modal, setModal] = useState(false);

//     const toggle =()=>setModal(!modal);

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