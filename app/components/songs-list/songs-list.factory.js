export default function SongsListFactory (RestAbstractFactory) {
	"ngInject";

	const songsInQueue = RestAbstractFactory.create('queue');
	const songs = RestAbstractFactory.create('songs');

	return {
		findSongsByQuery,
		findSongByStartWith,
		orderSongs,
		orderedForTable: null,
        addNewSong,
		updateSongInfo,
        deleteSong
	};

	function findSongsByQuery (query) {
		return songs.getList({ s:query })
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function findSongByStartWith (letter) {
		return songs.getList({ startWith:letter })
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
	
	function orderSongs(searchResult) {
		const orderedSongs = _.filter(searchResult, {selected: true})
								.map((song) => {
									return {
										reservationId: this.orderedForTable,
										songId: song.id
									}
								});
		return songsInQueue.post(orderedSongs)
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	function addNewSong (newSong) {
		return songs.post(newSong)
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError)
	}
	function updateSongInfo (song) {
		return song.put()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError)
	}

	function deleteSong (song) {
		return song.remove()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError)
	}
}