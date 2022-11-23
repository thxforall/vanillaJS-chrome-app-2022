const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 20) {
  console.log("You can't drink soju");
} else if (age >= 20 && age <= 50) {
  console.log("Let's go Soju");
} else {
  console.log("Beep");
}
