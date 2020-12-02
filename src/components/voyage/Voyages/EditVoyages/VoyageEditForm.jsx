// import React, {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

// const VoyageEditForm = (props) => {
//     const [editLocation, setEditLocation] = useState(props.logToUpdate.location);
//     const [editSeason, setEditSeason] = useState(props.logToUpdate.season);
//     const [editStay, setEditStay] = useState(props.logToUpdate.stay);
//     const [editFood, setEditFood] = useState(props.logToUpdate.food);
//     const [editRating, setEditRating] = useState(props.logToUpdate.rating);
//     const logUpdate = (event, log) => {
//         event.preventDefault();
//         fetch(`http://localhost:3050/voyage/update/${props.logToUpdate.id}`, {
//             method: 'PUT',
//             body: JSON.stringify({updateLogs: {location: editLocation, season: editSeason, stay: editStay, food: editFood, rating: editRating}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }) .then((res) => {
//             props.fetchLogs();
//             props.updateOff();
//         })
//     }

//     return (
//         <Modal isOpen={true}>
//             <ModalHeader>Post a Voyage</ModalHeader>
//             <ModalBody>
//                 <Form onSubmit={logUpdate}>
//                     <FormGroup>
//                         <Label htmlFor='location'>Edit Location:</Label>
//                         <Input name='location' value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
//                     </FormGroup>    
//                     <FormGroup>
//                         <Label htmlFor='season'>Edit Season:</Label>
//                         <Input name='season' value={editSeason} onChange={(e) => setEditSeason(e.target.value)}>
//                         <option></option>
//                         <option value='Summer'>Summer</option>
//                         <option value='Fall'>Fall</option>
//                         <option value='winter'>Winter</option>
//                         <option value='Spring'>Spring</option>
//                         </Input>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor='stay'>Edit Stay:</Label>
//                         <Input name='stay' value={editStay} onChange={(e) => setEditStay(e.target.value)} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor='food'>Edit Food:</Label>
//                         <Input name='food' value={editFood} onChange={(e) => setEditFood(e.target.value)} />
//                     </FormGroup>
//                     <FormGroup tag='fieldset'>
//                     <legend>Rating</legend>
//                     <FormGroup>
//                         <Label htmlFor='rating'>
//                             <Input type='radio' name='rating' value={1} onChange={(e)=>setEditRating(e.target.value)} />
//                             1
//                         </Label>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor='rating'>
//                             <Input type='radio' name='rating' value={2} onChange={(e)=>setEditRating(e.target.value)} />
//                             2
//                         </Label>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor='rating'>
//                             <Input type='radio' name='rating' value={3} onChange={(e)=>setEditRating(e.target.value)} />
//                             3
//                         </Label>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor='rating'>
//                             <Input type='radio' name='rating' value={4} onChange={(e)=>setEditRating(e.target.value)} />
//                             4
//                         </Label>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor='rating'>
//                             <Input type='radio' name='rating' value={5} onChange={(e)=>setEditRating(e.target.value)} />
//                             5
//                         </Label>
//                     </FormGroup>
//                 </FormGroup>
//                 <Button type='submit'>Update the voyage!</Button>
//                 </Form>
//             </ModalBody>
//         </Modal>
//     )
// }

// export default VoyageEditForm;