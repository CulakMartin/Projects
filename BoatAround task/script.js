// Task 1
function button1() {
	document.getElementById('task1output').value = stringCap(document.getElementById('task1input').value);
}

function stringCap(input) {

	var words = input.split(" ");
	const lng = words.length;
	
	for (i=0; i<lng; i++){
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);			
	}
	
	const output = words.join(" "); 

	return output;
}

// Task 2
function button2() {
	document.getElementById('task2output').value = palindromeCheck(document.getElementById('task2input').value);
}

function palindromeCheck(palindrome) {
	const lng = palindrome.length;

	for (i = 0; i < lng/2; i++){
		if(palindrome.charAt(i) != palindrome.charAt(lng-i-1))
			return false;
	}	
	return true;
}

// Task 3
function button3() {
	var yourNumbers = [5, 11, 20, 4, 7, 158, 45, 78, 127, 17, 18, 19];

	document.getElementById('task3input').value = yourNumbers;
	document.getElementById('task3output').value = onlyEven(yourNumbers);
}

function onlyEven(x) {
	for (i = 0; i < x.length; i++){
		if(x[i]%2 != 0){
			x.splice(i, 1);
			i--;
		}
	}	
	return x;
}

// Task 4
function button4() {
	document.getElementById('task4output').value = checkDate(document.getElementById('task4input').value); 
}

function checkDate(date) {
	return /^(19|20)\d{2}-{1}(1[0-2]|0[0-9])-{1}(3[0-1]|[0-2][0-9])$/gm.test(date);
}

//Task 5 

function button5() {
	document.getElementById('task5output').value = hideCardInfo(document.getElementById('task5input').value); 
}

function hideCardInfo(number){ 
	const hidden = number.replace(/\d{4}-/g, "####-");
 	return hidden;
} 



