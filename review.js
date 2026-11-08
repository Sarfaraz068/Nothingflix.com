// HTML page load hone ke baad hi code chalega
document.addEventListener("DOMContentLoaded", function() {

    // Form element ko select karein
    const form = document.querySelector("form");

    // Check karein ki form mil gaya ya nahi (safety ke liye)
    if (form) {
        form.addEventListener("submit", function(event) {
            // Page ko refresh hone se rokein
            event.preventDefault();

            // Inputs aur select/textarea fields ko select karein
            const inputs = form.querySelectorAll("input, select, textarea");
            let allFilled = true;

            // Check karein ki koi field khali toh nahi hai
            inputs.forEach(function(input) {
                if (input.value.trim() === "" || input.value === "Select Rating") {
                    allFilled = false;
                }
            });

            // Agar sabhi fields bhari hain toh success, warna error popup
            if (allFilled) {
                alert("Review submitted!");
                form.reset(); // Form ko clear karne ke liye
            } else {
                alert("Review not submitted!");
            }
        });
    }

});