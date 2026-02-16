  const quoteBox = document.getElementById("quoteBox");
        const newQuoteBtn = document.getElementById("newQuoteBtn");
        const loading = document.getElementById("loading");
        const error = document.getElementById("error");

        async function fetchQuote() {
            loading.textContent = "Loading...";
            error.textContent = "";
            quoteBox.textContent = "";

            try {
                const response = await fetch("https://api.quotable.io/random");
                if (!response.ok) throw new Error("Network response was not ok");

                const data = await response.json();
                quoteBox.textContent = `"${data.content}" — ${data.author}`;
            } catch (err) {
                error.textContent = "Failed to fetch quote. Try again.";
                console.error(err);
            } finally {
                loading.textContent = "";
            }
        }

        newQuoteBtn.addEventListener("click", fetchQuote);