//characteristic / properties of the object
var orc = {
	

	hair: "green",
	age: 27,
	stomachFull: true,
		eat: function() {
		document.write("YUM YUM!");}
};

	orc.stomachFull = false;

if (orc.stomachFull == true) {
	orc.eat();
}

else{
	document.write("Orc is not going to eat");
}
//.text is a method for the object orc
//orc.color;
//orc.yell();