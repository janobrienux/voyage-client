const Voyage = (props) => {
    // console.log('Voyage props.voyages: ', props.voyages.logs)

        const deleteVoyage = (voyage) => {
        fetch(`http://localhost:3050/voyage/delete/${voyage.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchResults())
    };


    return (
            props.voyages.logs.map((voyage, index) => {
                return (
                    <div key={index}>
                        <div>
                            <p>{voyage.location}</p>
                            <p>{voyage.season}</p>
                            <p>{voyage.stay}</p>
                            <p>{voyage.food}</p>
                            <p>{voyage.rating}</p>
                            <button onClick={() => {props.editUpdateVoyage(voyage); props.updateOn()}}>Update Voyage</button>
                            {/* <button color="warning" onClick={() => {props.editUpdateVoyage(voyage); props.updateOn()}}>Update</button> */}
                            <button color="danger" onClick={() => {deleteVoyage(voyage)}}>Delete</button>
                        </div>
                    </div>
                )
            })
    )
};

export default Voyage;