export default function SongsQueueFactory (RestAbstractFactory) {
	"ngInject";
	const url  = 'songs';
	const rest = RestAbstractFactory.create (url);
	
	return {
		findSongsByQuery
	};
	
	function findSongsByQuery (query) {
		return rest.getList({ s:query })
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}