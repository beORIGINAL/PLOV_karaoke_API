export default function QueueHistoryFactory (RestAbstractFactory) {
	"ngInject";
	const url  = 'logs';
	const rest = RestAbstractFactory.create(url);
	
	return {
		getQueueHistory
	};
	
	function getQueueHistory (date) {
		return rest.getList({ date: date.toISOString() })
			.then(RestAbstractFactory.handleSuccess)
			.catch(RestAbstractFactory.handleError);
	}
}