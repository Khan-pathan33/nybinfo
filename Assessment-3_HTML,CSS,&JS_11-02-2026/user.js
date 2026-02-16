  const form = document.getElementById("userForm");
        const output = document.getElementById("output");

        function displayData() {
            const storedName = localStorage.getItem("name");
            const storedEmail = localStorage.getItem("email");

            if (storedName && storedEmail) {
                output.innerHTML = 
                    "Name: " + storedName + "<br>Email: " + storedEmail;
            }
        }

        displayData();

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);

            displayData();
            form.reset();
        });