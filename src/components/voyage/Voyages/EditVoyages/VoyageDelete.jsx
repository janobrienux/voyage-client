//     const DeleteVoyage = (props) => {
//         fetch(`http://localhost:3050/delete/${log.id}`, {
//             method: 'DELETE',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         })
//         .then(() => props.fetchVoyages())

//         return (
//             <div>
//                     <Button color="warning" onClick={() => {props.editUpdateVoyage(voyage); props.updateOn()}}>Update</Button>
//                     <Button color="danger" onClick={() => {deleteVoyage(voyage)}}>Delete</Button>
//             </div>
//         );
//     };

// export default VoyageDelete;