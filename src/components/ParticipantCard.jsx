import { useState } from "react";
import { normalizeModuleId } from "vite/module-runner";

const ParticipantCard = ({ participants }) => {
	const [activeId, setActiveId] = useState(null);
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
					<div
						className="accordion"
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
									<strong>
										<p>{participant.phone}</p>
									</strong>
									<p>{participant.email}</p>
									<p>{participant.fiscalCode}</p>
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
