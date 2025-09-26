const ParticipantCard = ({ participants }) => {
  return (
    <div>
      {participants.map((participant) => (
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
