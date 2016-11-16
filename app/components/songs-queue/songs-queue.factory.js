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
	
	function updateSongStatus(song) {
		return RestAbstractFactory.copy(song).put()
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}