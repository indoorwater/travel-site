var $ = require('jquery');
import person from './modules/Person';


class Adult extends person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.")
	}
	
}



var john = new person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "red");
jane.greet();

jane.payTaxes();
