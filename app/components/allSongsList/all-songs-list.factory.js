export default function AllSongsFactory (RestAbstractFactory) {
	"ngInject";
	const url  = 'Search';
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