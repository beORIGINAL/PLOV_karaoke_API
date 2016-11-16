export default function ReservationsFactory (RestAbstractFactory) {
	"ngInject";
	const reservations = RestAbstractFactory.create('reservations');
	const songsInQueue = RestAbstractFactory.create('queue');

	return {
		getAllReservations,
		getSongsForReservation,
		orderSongs,
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

	function orderSongs(songsId, orderedFor) {
		debugger
		return songsInQueue.one(orderedFor).post(songsId)
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function removeSongFromQueue (tableId, id) {
		return rest.one(tableId).one('queue', id).remove()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}