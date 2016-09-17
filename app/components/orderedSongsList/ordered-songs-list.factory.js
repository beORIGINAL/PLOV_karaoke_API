export default function OrderedSongsFactory (RestAbstractFactory) {
	"ngInject";
	const url ='Reserv';
	const rest = RestAbstractFactory.create(url);

	return {
		getAllReservations,
		getSongsForReservation,
		orderSongs,
		removeSongFromQueue
	};

	function getAllReservations () {
		return rest.getList()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function getSongsForReservation (id) {
		return rest.one(id).customGET('songs')
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function orderSongs(songsId, orderedFor) {
		return rest.one(orderedFor).all('songs').post(songsId)
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function orderSong (id) {
		console.log(id);
	}

	function removeSongFromQueue (tableId, songId) {
		return rest.one(tableId).one('songs', songId).remove()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}