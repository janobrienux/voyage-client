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
                        <p>{voyage.location}</p>
                        <p>{voyage.season}</p>
                        <p>{voyage.stay}</p>
                        <p>{voyage.food}</p>
                        <p>{voyage.rating}</p>
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
