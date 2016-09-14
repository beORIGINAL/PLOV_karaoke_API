export default class MyCtrl {
	constructor (){
		this.myVar = false;
		this.list = [
			{
				name: 'Denys'
			},
			{
				name: 'Max'
			},
			{
				name: 'Andrew'
			},
			{
				name: 'Dmytro'
			}
		]
	}

	clickMe (idx) {
		this.list.splice(idx, 1);
	}
}