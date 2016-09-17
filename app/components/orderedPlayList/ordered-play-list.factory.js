export default function OrderedPlayListFactory (RestAbstractFactory) {
	"ngInject";
	const url  = 'Queue';
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

	function updateSongStatus(song) {
		return rest.one(song.id).put()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}