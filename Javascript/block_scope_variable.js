let age = 20;

// variable message can be accessed only inside {} boundaries that is it is block scoped
if (age >= 18) {
    let message = "You are an adult";
    console.log(message);
}

console.log(message);