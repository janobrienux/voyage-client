import { Button } from "reactstrap";

const Voyage = (props) => {

    const deleteVoyage = (voyage) => {
        fetch(`http://localhost:3050/voyage/delete/${voyage.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token,
            }),
        }).then(() => props.fetchResults());
    };

    return (
        props.voyages.logs.map((voyage, index) => {
            return (
                <div key={index}>
                    <div>
                        <h4>Voyage: {voyage.location}</h4>
                        <p>Season: {voyage.season}</p>
                        <p>Accommodations: {voyage.stay}</p>
                        <p>Restaurants: {voyage.food}</p>
                        <p>Desire Rating: {voyage.rating}</p>
                        <Button color="warning" 
                            onClick={
                                (e) => {
                                    props.updateOn(e);
                                    props.editUpdateVoyage(voyage)
                                }
                            }
                        >Update</Button>
                        <Button color="danger"onClick={() => {deleteVoyage(voyage);}}>Delete</Button>
                    </div>
                </div>
            )
        })
    )
};

export default Voyage;     
