// import React, {useState, useEffect} from 'react';
// import {Container, Row, Col} from 'reactstrap';
// import PostVoyage from './PostVoyages/PostVoyage';
// import AllVoyages from './GetVoyages/AllVoyages';

// const TestVoyageSplashPage = (props) => {

    // const [logs, setLogs] = useState([]);
    // const [updateActive, setUpdateActive] = useState(false);
    // const [logToUpdate, setLogToUpdate] = useState({});

    // const fetchLogs = () => {
    //     fetch('http://localhost:3050/voyage/getlogs', {
    //         method: 'GET',
    //         headers: new Headers ({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     }) .then( (res) => res.json())
    //     .then((data) => {
    //         setLogs(data)
    //     })
    // }

    // const editUpdateLog = (log) => {
    //     setLogToUpdate(log);
    //     console.log(log);
    // }

    // const updateOn = () => {
    //     setUpdateActive(true);
    // }

    // const updateOff = () => {
    //     setUpdateActive(false);
    // }

    // useEffect(() => {
    //     fetchLogs();
    // }, [])

    // return(
    //     <Container>
    //         <Row>
    //             <Col md="4">
    //                 <PostVoyage fetchLogs={fetchLogs} token={props.token} />
    //             </Col>
    //             <Col md="4">
    //                 <AllVoyages token={props.token} />
    //             </Col>
    //             <Col md="4">
    //                 <VoyageEdit logs={logs} editUpdateLog={editUpdateLog} updateOn={updateOn} fetchLogs={fetchLogs} token={props.token} />
    //             </Col>
    //                 {updateActive ? <VoyageEditForm logToUpdate={logToUpdate} updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></> }
    //         </Row>
    //     </Container>
    // )

    // export default TestVoyageSplashPage;