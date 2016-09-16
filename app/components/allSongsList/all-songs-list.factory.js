export default function AllSongsFactory (RestAbstractFactory) {
	"ngInject";
	const url  = 'Search';
	const rest = RestAbstractFactory.create (url);

	return {
		findSongsByQuery
	};

	function findSongsByQuery (query) {
		// return rest.getList({ s:query });
		return Promise.resolve([
			{
				"id": "403df3b8-51f8-451c-94a1-db53dc2786b2",
				"artist": "sample string 2",
				"title": "sample string 3",
				"queueId": "c5712e1e-e3fc-4033-8935-a5e2043028ca",
				"selected": "false"
			},
			{
				"id": "4qweasdasb8-51f8-451c",
				"artist": "saqweqdle string 4",
				"title": "samplwqeqwe string 3",
				"queueId": "c571qweqwe2e1e4033-8935-a5e2043028ca",
				"selected": "false"
			},
			{
				"id": "403qqw-51qweqwf8-451c",
				"artist": "sampfqweqwsgdsle string 4",
				"title": "sample qweqwestring 3",
				"queueId": "c5712edqweqwasd1e4033-8935-a5e2043028ca",
				"selected": "false"
			},
			{
				"id": "403df3b8-5qweqw1f8-451c",
				"artist": "sample stqweqwring 4",
				"title": "sample sasdqweqwasdtring 3",
				"queueId": "qweqw-8935-a5e2043028ca",
				"selected": "false"
			}
		]);
	}
}