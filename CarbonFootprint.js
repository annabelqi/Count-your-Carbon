var myFunction = function() {
	var method = document.getElementById("method").value;
	var hours = document.getElementById("hours").value;

	var methodStorage = localStorage.getItem("method");
	var hoursStorage = localStorage.getItem("hours");

	var redirect = false;

	if (method == "car") {
		var emissionCar = 365*(40 * hours * 365 * 0.18);
		alert("Your carbon footprint is: "+ emissionCar + " kg CO2e/yr");
	}

	else if (method == "bus") {
		var emissionBus = 365*(19.3 * hours * 365 * 0.019);
		alert("Your carbon footprint is: "+ emissionBus + " kg CO2e/yr");
	}

	else if (method == "metro") {
		var emissionMetro = 365*(35 * hours * 365 * 0.097);
		alert("Your carbon footprint is: "+ emissionMetro + " kg CO2e/yr");
	}

	else if (method == "rail") {
		var emissionRail = 365*(80.5 * hours * 365 * 0.026);
		alert("Your carbon footprint is: "+ emissionRail + " kg CO2e/yr");
	}

	else if (method == "flight") {
		var emissionFlight = 365*(880 * hours * 365 * 1.09 * 0.432);
		alert("Your carbon footprint is: "+ emissionFlight + " kg CO2e/yr");
	}

	else {
		alert("Please input a method of transporation listed above!");
	}


	localStorage.setItem('method', methodStorage);
	localStorage.setItem('hours', hoursStorage);
	window.location.redirect("#pricing");

	return false;
};