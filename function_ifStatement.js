function batting(player, distance){

	if(distance <= 100 && distance > 0){
		document.write(player + "  hit the ball ");
	}

else if (distance <= 0){
	document.write(player + " Struck out ");
}
	else{
		document.write(player + " hit a home run ");
	}
}

batting("Steve", 0);