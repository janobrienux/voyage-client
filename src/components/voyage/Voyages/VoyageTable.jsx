import React from "react";
import { Table, Button } from "reactstrap";

const VoyageTable = (props) => {
  const deleteVoyage = (voyage) => {
    fetch(`http://localhost:3050/voyage/${voyage.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchVoyages());
  };

  const VoyageMapper = () => {
    return props.voyages.map((voyage, index) => {
      return (
        <tr key={index}>
          <th scope="row">{voyage.id}</th>
          <td>{voyage.location}</td>
          <td>{voyage.season}</td>
          <td>{voyage.stay}</td>
          <td>{voyage.food}</td>
          <td>{voyage.rating}</td>
          <td>
            <Button color="warning">Update</Button>
            <Button
              color="danger"
              onClick={() => {
                deleteVoyage(voyage);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h3>Voyage History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Location</th>
            <th>Season</th>
            <th>Stay</th>
            <th>Food</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{VoyageMapper()}</tbody>
      </Table>
    </>
  );
};

export default VoyageTable;
