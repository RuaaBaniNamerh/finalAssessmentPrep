//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// // write your code here ...
// function each (coll,fun){
// 	if(!Array.isArray(coll)){
// 		for (vari=0;i<coll.length,i++){
// 			return fun(coll[i],i)
// 		}
// 		for (var key in coll){
// 			return fun(coll[key],key)
// 		}
// 	}
// }

function factorail(name, age, education,nationality){
	return {
		name:name,age:age,education:education
		,nationality:nationality
	}
}
// represent:
factorail("MohammadTarbosh",20,"syrain","network")
Object {name: "MohammadTarbosh", age: 20, education: "syrain", nationality: "network"}
factorail("ZainbHamammi",22,"syrain","daittion")
Object {name: "ZainbHamammi", age: 22, education: "syrain", nationality: "daittion"}
//
var students=[ {name: "ZainbHamammi", age: 22, education: "syrain", nationality: "daittion"},{name: "MohammadTarbosh", age: 20, education: "syrain", nationality: "network"}]
function showFriend (str){
for (var i=0;i<students.length;i++)
	if("str"==students[i])
 return Object.keys(object)
}
function avergeStudents(students,age){
	var cont
	for (var i = 0; i < students.length; i++) {
		for (var age in object)
		if (typeof object[age] === 'number'){
			cont =(age+age)/age++
		}
	}
return cont
}
/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,12,16,100];
*/
// write your code here ...
function rangeS(a,b){

	if(a%2===0 && a===1){
		return a*a
	}else {
	rangeS((a*a-1))
	}
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

