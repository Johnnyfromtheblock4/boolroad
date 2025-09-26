import trips from "../data/db";

const ParticipantCard = ({ currentTrip }) => {
  return (
    <div>
      {currentTrip.participants &&
        currentTrip.participants.map((participant) => (
          <div key={participant.participantId}>
            <Link to={`/trips/${id}/participant/${participant.participantId}`}>
              {participant.name} {participant.surname}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ParticipantCard;
