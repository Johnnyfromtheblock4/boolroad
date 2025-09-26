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
					<div class="accordion">
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									{participant.name} {participant.surname}
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
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
