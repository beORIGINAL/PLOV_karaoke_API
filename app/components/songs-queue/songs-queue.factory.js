export default function SongsQueueFactory (RestAbstractFactory) {
	"ngInject";
	const url  = 'queue';
	const rest = RestAbstractFactory.create(url);

	return {
		getSongsQueueList,
		updateSongStatus
	};

	function getSongsQueueList (query) {
		return rest.getList()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}

	//song.id
	function updateSongStatus(song) {
		return rest.one(song.id).put()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}