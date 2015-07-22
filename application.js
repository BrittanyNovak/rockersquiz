function printOurForm() {
	var firstname;
	var lastname;
	var address;
	var phonenumber;
	var phonetype;
	
	firstname =  document.getElementById("one");
	lastname = document.getElementById("two");
	address =  document.getElementById("three");
	phonenumber = document.getElementById("four");
	phonetype = document.getElementsByName("purpose");
	
	printOut  = document.getElementById ("printStuffHere");
	
	printOut.innerHTML = "hello " + firstname.value + " " + lastname.value + "<br>";
	printOut.innerHTML += "whose address is " + address.value + "<br>";
	printOut.innerHTML  += "and your phone number is " + phonenumber.value + "<br>";
	printOut.innerHTML += "and this is a " + phonetype[0].value + " phone" +"<br>";
	
}

		
