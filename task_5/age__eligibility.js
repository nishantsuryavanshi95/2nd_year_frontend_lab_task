function checkAge() {
    let input = prompt("Enter your age:");

    if (input === null || input.trim() === "") {
        alert("Please enter a valid age.");
        return;
    }

    let age = Number(input);

    if (!Number.isFinite(age) || !Number.isInteger(age) || age < 0) {
        alert("Please enter a valid age.");
    } else {
        let result = age >= 18
            ? "You are eligible to vote."
            : "You are not eligible to vote.";

        alert(result);
    }
}

checkAge();