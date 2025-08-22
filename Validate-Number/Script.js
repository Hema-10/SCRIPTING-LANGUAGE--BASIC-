document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let number = document.getElementById("numberInput").value.trim();
    let result = document.getElementById("result");

    // Check: must be 4 digits and numeric
    if (!/^\d{4}$/.test(number)) {
        result.textContent = "Please enter exactly 4 digits.";
        result.style.color = "red";
        return;
    }

    // Check: no zero as first digit
    if (number[0] === "0") {
        result.textContent = "First digit cannot be zero.";
        result.style.color = "red";
        return;
    }

    // Check: ascending order
    let isAscending = true;
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] >= number[i+1]) {
            isAscending = false;
            break;
        }
    }

    if (!isAscending) {
        result.textContent = "Digits must be in ascending order (e.g., 1234).";
        result.style.color = "red";
    } else {
        result.textContent = "Valid number!";
        result.style.color = "green";
    }
});
