import React, {useState} from 'react';
import PostForm from './PostVoyageForm/PostForm';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


const PostVoyage =(props)=>{
    const [modal, setModal] = useState(false);
    // console.log("PostVoyage Token:", props.token)

    const toggle =()=>setModal(!modal);

    return(
        <div>
            <Button onClick={toggle}>Post Voyage Form</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <h1>Add Voyage</h1>
                    <PostForm token={props.token} />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default PostVoyage;