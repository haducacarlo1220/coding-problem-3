function ageCategorization() {
    let age = prompt("Enter your age:");
age =(18); 

if (age < 5) {
    alert("The user is a Toddler.");
} else if (age >= 5 && age <= 12) {
    alert("The user is a Child.");
} else if (age >= 13 && age <= 19) {
    alert("The user is a Teenager.");
} else if (age >= 20 && age <= 35) {
    alert("The user is a Young Adult.");
} else if (age >= 36 && age <= 60) {
    alert("The user is Middle-aged.");
} else {
    alert("The user is a Senior.");
}
}