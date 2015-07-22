function makeMessage() {
	var v1, v2, v3;
	v1 = $("#one");
	v2 = $("#two");
	v3 = $("#three");
	
	var alertMessage= "";
	if(v1.val() == ""){ alertMessage += "Missing First Name, "; v1.addClass("missing"); }
		else { v1.removeClass("missing"); }
	if(v2.val() == "") { alertMessage += "Missing Last Name, "; v2.addClass("missing");}
		else { v2.removeClass("missing"); }
	if(v3.val() == "") { alertMessage += "Missing Phone Number, "; v3.addClass("missing");}
		else {v3.removeClass("missing"); }
		
	if(alertMessage != ""){
		alert("You are missing\n" + alertMessage);
	} else {
		var message = "Thank You " + v1.val() + " " + v2.val() + "<br>";
		message += "whose phone number is " + v3.val() + "<br>";
		$("#welcomeMessage").append(message);
	}
		
}