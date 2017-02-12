import './queue-history.scss';
import TURN_BACK_IMG from 'images/arrow_back.svg';
import DATE_RANGE from 'images/date_range.svg';

export const QueueHistoryComponent = {
	template: require('./queue-history.pug'),
	controller: class QueueHistoryController {
	/*@ngInject*/
		constructor ($state, QueueHistoryFactory) {
			this.QueueHistoryFactory = QueueHistoryFactory;
			this.arrowBackIco = TURN_BACK_IMG;
			this.dateTangeIco = DATE_RANGE;
		}
		
		$onInit () {
			this.selectedDate = { value: new Date() };
			this.historyList = [];
			this.getQueueHistory(this.selectedDate.value);
		}
		
		onDatechange () {
			console.info(this.selectedDate.value);
			this.getQueueHistory(this.selectedDate.value);
		}
		
		getQueueHistory (date) {
			this.QueueHistoryFactory.getQueueHistory(date)
				.then((data) => {
					this.historyList = data;
				});
		}
	}
};