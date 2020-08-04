// this will add two numbers and give you the sum when you reld page

 alert(  "hello world");
 let num1 = 2; 
 let num2 = 3;
 let sum = num1 + num2; alert(sum);
let age = 32; 
let pi = 3.142; 
let alphabet = 'a';

function add(num1, num2) {
	let sum = num1 + num2;
	return sum;
	// body...
}

if (age < 18) { alert("youre not an adult"); } else { alert( "youre an adult"); }
let fullName = {
	firstName: 'john' , lastName: 'Doe'
}
alert( fullName.firstName);

let personDetails = {
	fullName: {
		firstName: 'john',
		lastName: 'Doe'
	},
	alertMessage: function(message)
{
	}
}
personDetails.alertMessage(' hello World');

function emailValidate(email) {
	if (email.includes('@')) {
		return true;
	}
	else {
		return false;
	}
}
function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;
	if(emailValidate(emailText) !== true) {
		console.log(' the email address must contain @');
		return false;
	}
	console.log('Thanks for your message');
}
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', clickListener);

