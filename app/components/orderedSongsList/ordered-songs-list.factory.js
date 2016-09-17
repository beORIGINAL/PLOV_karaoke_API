export default function OrderedSongsFactory (RestAbstractFactory, LoggerFactory) {
	"ngInject";
	const url ='Reserv';
	const rest = RestAbstractFactory.create(url);

	return {
		getAllReservations,
		getSongsForReservation,
		orderSongs
	};

	function getAllReservations () {
		// return rest.getList()
		// 	.then(handleSuccess)
		// 	.catch(handleError);

		return Promise.resolve([{
			"id": 1,
			"name": "sample string 2"
		},
		{
			"id": 2,
			"name": "sample string 2"
		},
		{
			"id": 3,
			"name": "sample string 2"
		}]);
	}

	function getSongsForReservation (id) {
		// return rest.one(id).all('songs').get()
		// 	.then(handleSuccess)
		// 	.catch(handleError);
		return Promise.resolve([
			{
				"id": "dab53e3f-a415-470e-906e-c6afe8400f6c",
				"artist": "sample string 2",
				"title": "sample string 3",
				"queueId": "c4b34dfc-149d-4344-9d7f-6d6c48e89edf"
			},
			{
				"id": "dab53e3f-a415-470e-906e-c6afe8400f6c",
				"artist": "sample string 2",
				"title": "sample string 3",
				"queueId": "c4b34dfc-149d-4344-9d7f-6d6c48e89edf"
			}
		]);
	}

	function orderSongs(songsId, orderedFor) {
		return rest.one(orderedFor).all('songs').post(songsId)
			.then(handleSuccess)
			.catch(handleError);
	}

	function orderSong (id) {
		console.log(id);
	}

	function handleSuccess(data) {
		LoggerFactory.success({title: 'Data loaded'});
		return data;
	}

	function handleError(error) {
		LoggerFactory.error({ title: 'Error', message: error.message });
		return error;
	}
}