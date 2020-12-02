// import {Button} from 'reactstrap';
// import VoyageEdit from './VoyageEdit';

// const VoyageTable = (props) => {
//     // console.log('Voyage props.voyages: ', props.voyages.logs)

//                 return (
//                     <div>
//                         <div>
//                             <p>{props.location}</p>
//                             <p>{props.season}</p>
//                             <p>{props.stay}</p>
//                             <p>{props.food}</p>
//                             <p>{props.rating}</p>
//                         </div>
//                             <Button color="warning">Update</Button>
//                             <Button color="danger">Delete</Button>
//                     </div>
//                 )
// };

// export default VoyageTable;

// import {Table, Button} from 'reactstrap';

// const VoyageTable = (props) => {
//         const deleteLog = (log) => {
//             fetch('http://localhost:3050/voyage/delete/:id', {
//             // fetch(`http://localhost:3050/voyage/delete/${log.id}`, {
//                 method: 'DELETE',
//                 headers: new Headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': props.token
//             })
//         })
//         .then(() => props.fetchLogs())
//         console.log('Testing:', props.logs)
//     }
//     const logMapper = (logs) => {
//         return(
//             logs.map((log, index) => {
//                 return(
//                     <tr key={index}>
//                         <th scope="row">{log.id}</th>
//                         <td>{log.location}</td>
//                         <td>{log.season}</td>
//                         <td>{log.stay}</td>
//                         <td>{log.food}</td>
//                         <td>{log.rating}</td>
//                         <td>
//                             <Button color="warning" onClick={() => {props.editUpdateLog(log); props.updateOn()}}>Update</Button>
//                             <Button color="danger" onClick={() => {deleteLog(log)}}>Delete</Button>
//                         </td>
//                     </tr>
//                 )
//             })
//         )
//     }
//     {console.log('Testing:', props.logs.logs)}
//     return(
//         <>
//         <h3>Voyage History</h3>
//             <hr/>
//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Location</th>
//                         <th>Season</th>
//                         <th>Stay</th>
//                         <th>Food</th>
//                         <th>Rating</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* {props.logs.length === 0 ? null : logMapper(props.logs)} */}
//                 </tbody>
//             </Table>
//         </>
//     )
// };

// export default VoyageTable;