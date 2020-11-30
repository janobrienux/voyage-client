const Voyage = (props) => {
    // console.log('Voyage props.voyages: ', props.voyages.logs)

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
                        </div>
                    </div>
                )
            })
    )
};

export default Voyage;