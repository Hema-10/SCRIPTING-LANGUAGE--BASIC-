// Seats for each course
let seats = {
    cse101: 3,
    cse201: 2,
    cse301: 1
};

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("studentName").value.trim();
    let email = document.getElementById("studentEmail").value.trim();
    let course = document.getElementById("course").value;

    // Validation
    if (name === "" || email === "" || course === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email!");
        return;
    }

    // Check seat availability
    if (seats[course] > 0) {
        seats[course]--; // Decrease seat count
        document.getElementById(course).textContent = seats[course];

        // Add student to the list
        let li = document.createElement("li");
        li.textContent = `${name} (${email}) - Registered for ${course.toUpperCase()}`;
        document.getElementById("studentList").appendChild(li);

        alert("Registration Successful!");
    } else {
        alert("Sorry! This course is fully booked.");
    }

    // Reset form
    document.getElementById("registrationForm").reset();
});

// Simple email validation
function validateEmail(email) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}
