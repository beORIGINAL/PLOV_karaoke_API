export default function ReservationsFactory (RestAbstractFactory) {
	"ngInject";
	const reservations = RestAbstractFactory.create('reservations');
	const songsInQueue = RestAbstractFactory.create('queue');

	return {
		getAllReservations,
		getSongsForReservation,
		updateReservationStatus,
		removeSongFromQueue
	};

	function getAllReservations () {
		return reservations.getList()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function getSongsForReservation (id) {
		return songsInQueue.getList({reservationId: id})
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function removeSongFromQueue (songId) {
		return songsInQueue.one(songId).remove()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
	
	function updateReservationStatus (reservation) {
		return reservation.patch()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}