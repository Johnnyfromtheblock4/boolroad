import trips from "../data/db";
import { Link } from "react-router-dom";

const ParticipantCard = ({ currentTrip, id }) => {
  return (
    <div>
      {currentTrip.participants &&
        currentTrip.participants.map((participant) => (
          <div key={participant.participantId}>
            <p>
              {participant.name} {participant.surname}
            </p>
            <p>{participant.phone}</p>
            <p>{participant.email}</p>
            <p>{participant.fiscalCode}</p>
          </div>
        ))}
    </div>
  );
};

export default ParticipantCard;
