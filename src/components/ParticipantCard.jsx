import { useState } from "react";
import { normalizeModuleId } from "vite/module-runner";

const ParticipantCard = ({ participants }) => {
	const [activeId, setActiveId] = useState(null);
	return (
		<div>
			{participants.map((participant) => (
				<div
					key={participant.participantId}
					className="accordion my-3"
					id={`accordion-${participant.participantId}`}
				>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button"
								type="button"
								onClick={() =>
									setActiveId(
										activeId === participant.participantId
											? null
											: participant.participantId
									)
								}
							>
								{participant.name} {participant.surname}
							</button>
						</h2>
						<div
							className={`accordion-collapse collapse ${
								activeId === participant.participantId ? "show" : ""
							}`}
						>
							<div className="accordion-body">
								<div className="container-fluid">
									<div className="row">
										<div className="col-12 col-md-4 text-center">
											<p>{participant.phone}</p>
										</div>
										<div className="col-12 col-md-4 text-center">
											<p>{participant.email}</p>
										</div>
										<div className="col-12 col-md-4 text-center">
											<p>{participant.fiscalCode}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ParticipantCard;
