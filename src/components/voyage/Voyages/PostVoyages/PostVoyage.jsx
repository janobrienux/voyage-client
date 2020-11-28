import React, {useState} from 'react';
import PostForm from './PostVoyageForm/PostForm';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


const PostVoyage =()=>{
    const [modal, setModal] = useState(false);

    const toggle =()=>setModal(!modal);

    return(
        <div>
            <Button onClick={toggle}>Post Voyage Form</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <h1 toggle ={toggle}>Add Voyage</h1>
                    <PostForm />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default PostVoyage;