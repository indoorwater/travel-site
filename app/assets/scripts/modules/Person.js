class Person {
	constructor(fullName, favColor){
	
	this.name = fullName;
	this.color = favColor;
	}
	
	greet(){
		console.log("Hi There, my name is " + this.name + " my fav colour is " + this.color + ".");
	}
	
}

export default Person;
