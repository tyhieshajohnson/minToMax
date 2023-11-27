        var min, max, counter;

        function startCounter() {
            // Get input values
            min = parseInt(document.getElementById('min').value);
            max = parseInt(document.getElementById('max').value);

            // Initialize counter
            counter = min;

            // Display initial counter value
            document.getElementById('counter').innerHTML = counter;

            // Start counter interval
            setInterval(updateCounter, 1000);
        }

        function updateCounter() {
            // Increment counter
            counter++;

            // If counter exceeds max, reset to min
            if (counter > max) {
                counter = min;
            }

            // Display updated counter value
            document.getElementById('counter').innerHTML = counter;
        }
